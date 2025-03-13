const { ChromaClient } = require("chromadb");
const client = new ChromaClient();
require('dotenv').config();
const { HfInference } = require("@huggingface/inference");
const hf = new HfInference(process.env.example.REACT_APP_HF_API_KEY);

const collectionName = "hotel_collection"; // Collection for hotels




async function hello() {
    try {
        // Dynamically import to avoid circular dependency
        const { fetchAllHotels, getNewData  } = require("./hotel_service.js");

        const hotelItems = await fetchAllHotels(); // ✅ Now using await

        if (!hotelItems || hotelItems.length === 0) {
            console.log("❌ No hotels found, make sure the database is not empty.");
            return;
        }

        console.log("✅ Using Hotel Data_1:", hotelItems);


        // Convert hotel data into a structured format
        const hotelTexts = hotelItems.map((hotel) =>
            `Hotel Name: ${hotel.hotel_name}, Location: ${hotel.location}, 
            Surroundings: ${hotel.surrounding_places}, Distance from Town: ${hotel.distance_from_town} km, 
            Price Single Room: $${hotel.price_single_room}, Price Double Room: $${hotel.price_double_room}, 
            Contact: ${hotel.contact}`
        );
        console.log("✅ Hotel Texts:", hotelTexts);

        const collection = await client.getOrCreateCollection({ name: collectionName });
        console.log("✅ Collection created:", collection);

        // Generate embeddings for hotels
        const embeddingsData = await generateEmbeddings(hotelTexts);

        // Add hotels as items to the collection
        await collection.add({
            ids: hotelItems.map((hotel) => hotel.id.toString()), // Unique IDs for hotels
            documents: hotelTexts,
            embeddings: embeddingsData,
        });


        const new_data = getNewData(); // ✅ Get the latest value of new_data
        console.log("new_data_test", new_data);
    
        const query = `hotel in ${new_data.destination}`;
        const filterCriteria = await extractFilterCriteria(query);
        const initialResults = await performSimilaritySearch(collection, query, filterCriteria, hotelItems);

        each_hotel = [];
        // Display the top 5 recommended hotels
        initialResults.slice(0, 5).forEach((item, index) => {
            console.log(`Top ${index + 1} Recommended Hotel: ${item.hotel_name}`);
            // each_hotel.push(item.hotel_Name);
            const hi = item.hotel_name.toLowerCase();
            console.log("hi", hi);
            const hotel = hotelItems.find((hotel) =>
                hotel.hotel_name.toLowerCase() === item.hotel_name.toLowerCase()
                );
        
                if (hotel) {
                console.log("✅ Hotel Found:", hotel);
                each_hotel.push(hotel);
                } else {
                console.log("❌ Hotel not found");
                }
        });
        console.log("items_hotel", each_hotel);


        return each_hotel;

    } catch (error) {
        console.error("Error:", error);
    }
};


async function generateEmbeddings(texts) {
    return hf.featureExtraction({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        inputs: texts,
    });
}

async function classifyText(text, labels) {
    const response = await hf.request({
        model: "facebook/bart-large-mnli",
        inputs: text,
        parameters: { candidate_labels: labels },
    });
    return response;
}

async function extractFilterCriteria(query) {
    const criteria = { location: null, hotelName: null };
    const labels = ["location", "hotel name"];
    
    const words = query.split(" ");
    for (const word of words) {
        const result = await classifyText(word, labels);
        const highestScoreLabel = result.labels[0];
        const score = result.scores[0];

        if (score > 0.5) {
            switch (highestScoreLabel) {
                case "location":
                    criteria.location = word;
                    break;
                case "hotel name":
                    criteria.hotelName = word;
                    break;
                // case "surrounding places":
                //     criteria.surroundingPlaces = word;
                //     break;
                default:
                    break;
            }
        }
    }
    return criteria;
}

// async function performSimilaritySearch(collection, queryTerm, filterCriteria) {
//     try {
//         const queryEmbedding = await generateEmbeddings([queryTerm]);
//         console.log("Filter Criteria:", filterCriteria);

//         const results = await collection.query({
//             collection: collectionName,
//             queryEmbeddings: queryEmbedding,
//             n: 3,
//         });

//         if (!results || results.length === 0) {
//             console.log(`No Hotels found similar to "${queryTerm}"`);
//             return [];
//         }

//         let topHotels = results.ids[0].map((id, index) => {
//             return {
//                 id,
//                 score: results.distances[0][index],
//                 hotel_Name: hotelItems.find((hotel) => hotel.id.toString() === id).hotel_name,
//                 hotel_Location: hotelItems.find((hotel) => hotel.id.toString() === id).location,
//             };
//         }).filter(Boolean);

//         return topHotels.sort((a, b) => a.score - b.score);
//     } catch (error) {
//         console.error("Error during similarity search:", error);
//         return [];
//     }
// }


async function performSimilaritySearch(collection, queryTerm, filterCriteria, hotelItems) {
    try {
        const queryEmbedding = await generateEmbeddings([queryTerm]);
        console.log("Filter Criteria:", filterCriteria);

        const results = await collection.query({
            collection: collectionName,
            queryEmbeddings: queryEmbedding,
            n: 3,
        });

        if (!results || results.length === 0) {
            console.log(`No Hotels found similar to "${queryTerm}"`);
            return [];
        }

        // ✅ Use hotelItems from the parameter
        let topHotels = results.ids[0].map((id, index) => {
            const hotel = hotelItems.find((hotel) => hotel.id.toString() === id);
            if (!hotel) return null;

            return {
                id,
                score: results.distances[0][index],
                hotel_name: hotel.hotel_name,
                hotel_Location: hotel.location,
            };
        }).filter(Boolean);

        return topHotels.sort((a, b) => a.score - b.score);
    } catch (error) {
        console.error("Error during similarity search:", error);
        return [];
    }
}




module.exports = { hello };
