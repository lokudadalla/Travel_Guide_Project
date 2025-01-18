/*const { GoogleGenerativeAI } = require("@google/generative-ai");

async function main() {
    const genAI = new GoogleGenerativeAI("AIzaSyCITDU62RiLWy5Lkq6-2z8q9KQ5c30_QPk");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "remebmer to take your name is gemini. now give your name";

    try {
        const result = await model.generateContent(prompt);
        // Log the full result for debugging
        console.log("Full result:", result);

        // Call the function to get the actual text content
        if (result.response && typeof result.response.text === "function") {
            const text = result.response.text(); // Call the function to get the text
            console.log("Generated content:", text);
        } else {
            console.error("Unexpected response structure:", result);
        }
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

main();

*/




//To enable storing conversation history and dynamically passing it to the AI model for a more updated and context-aware response

const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");

async function main() {
    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI("AIzaSyCITDU62RiLWy5Lkq6-2z8q9KQ5c30_QPk");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Memory structure to store conversation history
    const memory = [];

    // Initial context
    const initialContext = "Remember, your name is Gemini. You are an AI here to assist the user.";
    memory.push({ role: "system", content: initialContext });

    // Setup readline interface for user input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("Welcome to the interactive session. Type 'exit' to end the session.");

    const askQuestion = (query) =>
        new Promise((resolve) => rl.question(query, (answer) => resolve(answer)));

    let continueLoop = true;

    try {
        while (continueLoop) {
            // Prompt the user for input
            const userInput = await askQuestion("Enter your prompt (or 'exit' to quit): ");

            if (userInput.toLowerCase() === "exit") {
                continueLoop = false;
                console.log("Exiting the interactive session...");
                break;
            }

            // Add user input to memory
            memory.push({ role: "user", content: userInput });

            // Prepare the full conversation history as input for the AI
            const conversationHistory = memory.map(entry => `${entry.role === "system" ? "System" : "User"}: ${entry.content}`).join("\n");

            // Generate a response using the model
            const result = await model.generateContent(conversationHistory);

            let responseText = "";
            if (result.response && typeof result.response.text === "function") {
                responseText = result.response.text(); // Call the function to get the text
            } else {
                console.error("Unexpected response structure:", result);
                continue;
            }

            // Add AI response to memory
            memory.push({ role: "ai", content: responseText });

            console.log("Generated content:", responseText);
        }

        // Log the final conversation history
        console.log("Final conversation memory:");
        console.log(memory);
    } catch (error) {
        console.error("Error during interaction:", error);
    } finally {
        rl.close();
    }
}

main();

