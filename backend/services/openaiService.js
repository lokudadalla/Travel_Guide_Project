/*
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });
// Openai configuration information
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);
const gptModel = process.env.MODEL; // This is the model that is used for the chatbot eg. gpt-4, gpt-3.5, gpt-3.5-turbo, etc

// This function will return the response from the chat completion API
async function callGPT(promptContent, systemContent, previousChat) {
  try {
    const messages = [];

    const userPrompt = {
      role: "user",
      content: promptContent,
    };
    const systemPrompt = {
      role: "system",
      content: systemContent,
    };
    const assistantPrompt = {
      role: "assistant",
      content: previousChat,
    };
    // Messages will contain all the information needed for the api to have context
    messages.push(userPrompt);
    messages.push(systemPrompt);
    messages.push(assistantPrompt);

    const response = await openai.createChatCompletion({
      model: gptModel,
      messages: messages,
    });

    // This is for debugging purposes
    console.log(0);
    console.log(promptContent);
    console.log(1);
    console.log(response.data.choices[0].message.content);
    // Contains the response from the chat completion API
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return `An error occurred while processing the request: ${error}`;
  }
}

module.exports = { callGPT };
*/



const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Generative AI client with API key
const genAI = new GoogleGenerativeAI("add gemini token"); // Replace with your actual API key
const geminiModelName = "gemini-1.5-flash"; // Replace with your desired model name

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
