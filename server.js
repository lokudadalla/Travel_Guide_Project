const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI("AIzaSyCITDU62RiLWy5Lkq6-2z8q9KQ5c30_QPk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Memory structure to store conversation history
const memory = [];

// Initial context for the Gemini model
const initialContext = "Remember, your name is Gemini. You are an AI here to assist the user.";
memory.push({ role: "system", content: initialContext });

// Endpoint to handle incoming messages from the frontend
app.post("/message", async (req, res) => {
    const userInput = req.body.message; // Get user message from request body

    if (!userInput) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        // Add user input to memory
        memory.push({ role: "user", content: userInput });

        // Prepare the conversation history
        const conversationHistory = memory
            .map((entry) => `${entry.role === "system" ? "System" : "User"}: ${entry.content}`)
            .join("\n");

        // Generate a response using the Gemini model
        const result = await model.generateContent(conversationHistory);

        let responseText = "";
        if (result.response && typeof result.response.text === "function") {
            responseText = result.response.text(); // Get response text
        } else {
            throw new Error("Unexpected response structure");
        }

        // Add AI response to memory
        memory.push({ role: "ai", content: responseText });

        // Send AI response back to the frontend
        res.json({ message: responseText });
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({ error: "An error occurred while generating the response." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
