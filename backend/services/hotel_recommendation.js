const { ChromaClient } = require("chromadb");
const client = new ChromaClient({path: process.env.CHROMA_URL});
require('dotenv').config();
const { HfInference } = require("@huggingface/inference");
const hf = new HfInference(process.env.HF_API_KEY); // Use your actual Hugging Face API key here

const { OpenAIEmbeddingFunction } = require("@chroma-core/openai");

const embeddingFunction = new OpenAIEmbeddingFunction({
  apiKey: process.env.OpenAI_API_KEY, // Use your actual OpenAI API key here
  modelName: "text-embedding-3-small",
});

const collectionName = "hotel_collection"; // Collection for hotels




async function hello() {
    try {
        const { fetchAllHotels, getNewData } = require("./hotel_service.js");

        const hotelItems = await fetchAllHotels();

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

        // ✅ IMPORTANT: Pass the embedding function directly to the collection creation
        const collection = await client.getOrCreateCollection({
            name: collectionName,
            embeddingFunction: embeddingFunction
        });
        console.log("✅ Collection created:", collection);

        // Add hotels as items to the collection
        // ✅ The collection will now automatically generate embeddings from the documents
        await collection.add({
            ids: hotelItems.map((hotel) => hotel.id.toString()),
            documents: hotelTexts,
            // ❌ REMOVED: No need to pass 'embeddings' anymore
        });

        const new_data = getNewData();
        console.log("new_data_test", new_data);

        const query = `hotel in ${new_data.destination}`;
        const filterCriteria = await extractFilterCriteria(query);
        const initialResults = await performSimilaritySearch(collection, query, filterCriteria, hotelItems);

        each_hotel = [];
        // Display the top 5 recommended hotels
        initialResults.slice(0, 5).forEach((item, index) => {
            console.log(`Top ${index + 1} Recommended Hotel: ${item.hotel_name}`);
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
}


// async function classifyText(text, labels) {
//     const response = await hf.request({
//         model: "facebook/bart-large-mnli",
//         inputs: text,
//         parameters: { candidate_labels: labels },
//     });
//     return response;
// }


// Zero-shot over words to tag as "location" or "hotel name"
async function classifyText(text, labels) {
  if (!hf) return null; // no key → skip classification
  try {
    const out = await hf.zeroShotClassification({
      model: "facebook/bart-large-mnli",
      inputs: text,
      parameters: { candidate_labels: labels }
    });
    // HF may return an object or an array; normalize
    return Array.isArray(out) ? out[0] : out;
  } catch (err) {
    console.error("❌ HF zero-shot error:", err.message || err);
    return null;
  }
}

// async function extractFilterCriteria(query) {
//     const criteria = { location: null, hotelName: null };
//     const labels = ["location", "hotel name"];
    
//     const words = query.split(" ");
//     for (const word of words) {
//         const result = await classifyText(word, labels);
//         const highestScoreLabel = result.labels[0];
//         const score = result.scores[0];

//         if (score > 0.5) {
//             switch (highestScoreLabel) {
//                 case "location":
//                     criteria.location = word;
//                     break;
//                 case "hotel name":
//                     criteria.hotelName = word;
//                     break;
//                 // case "surrounding places":
//                 //     criteria.surroundingPlaces = word;
//                 //     break;
//                 default:
//                     break;
//             }
//         }
//     }
//     return criteria;
// }


async function extractFilterCriteria(query) {
  const criteria = { location: null, hotelName: null };
  const labels = ["location", "hotel name"];

  for (const word of query.split(/\s+/).filter(Boolean)) {
    const result = await classifyText(word, labels);
    if (!result || !result.labels || !result.scores) continue;

    const topLabel = result.labels[0];
    const topScore = result.scores[0] ?? 0;

    if (topScore > 0.5) {
      if (topLabel === "location") criteria.location = word;
      if (topLabel === "hotel name") criteria.hotelName = word;
    }
  }
  return criteria;
}





async function performSimilaritySearch(collection, queryTerm, filterCriteria, hotelItems) {
    try {
        // ✅ The query method can directly take a text string or array
        // It will use the collection's embeddingFunction to convert the text to an embedding
        console.log("Filter Criteria:", filterCriteria);

        const results = await collection.query({
            collection: collectionName,
            queryTexts: [queryTerm], // ✅ Use queryTexts instead of queryEmbeddings
            nResults: 3, // Changed 'n' to 'nResults' for clarity and accuracy
        });

        if (!results || results.length === 0) {
            console.log(`No Hotels found similar to "${queryTerm}"`);
            return [];
        }

        // The rest of the logic remains the same
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
