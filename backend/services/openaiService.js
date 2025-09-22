const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

// Initialize the Google Generative AI client with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 
const geminiModelName = process.env.GEMINI_API_MODEL; 

// This function will return the response from the Gemini AI model
async function callGemini(promptContent, systemContent, previousChat) {
    try {
        // Get the generative model
        const model = genAI.getGenerativeModel({ model: geminiModelName });

        // Memory structure to store conversation history
        const memory = [];

        const userPrompt = { role: "user", content: promptContent };
        const systemPrompt = { role: "system", content: systemContent };
        const assistantPrompt = { role: "ai", content: previousChat };

        // Add conversation context
        memory.push(systemPrompt);
        memory.push(userPrompt);
        memory.push(assistantPrompt);

        // Prepare the full conversation history as input for the AI
        const conversationHistory = memory
            .map(entry => `${entry.role === "system" ? "System" : entry.role === "ai" ? "Assistant" : "User"}: ${entry.content}`)
            .join("\n");

        // Generate a response using the model
        const result = await model.generateContent(conversationHistory);

        let responseText = "";
        if (result.response && typeof result.response.text === "function") {
            responseText = result.response.text(); // Call the function to get the text
        } else {
            console.error("Unexpected response structure:", result);
            throw new Error("Unexpected response structure from Gemini API");
        }

        // Debugging and logging
        console.log("Prompt Content:", promptContent);
        console.log("Generated Response:", responseText);

        // Return the generated content
        return responseText;
    } catch (error) {
        console.error("Error:", error);
        return `An error occurred while processing the request: ${error.message}`;
    }
}

module.exports = { callGemini };
