import React, { useState, useEffect, useRef } from "react";
import ChatBody from "../components/ChatBody";
import ChatInput from "../components/ChatInput";
import "./Chat.css";

const Chat = ({ onClose }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
  const [typingIntervalId, setTypingIntervalId] = useState(null);
  const [typingIndicatorMessage, setTypingIndicatorMessage] =
    useState("Typing");
  const EXPRESS_PORT = 3000;

  const firstRender = useRef(true);

  const displayUserMessage = (message) => {
    setChatMessages((prev) => [...prev, { message, type: "user" }]);
    setUserInput("");
  };

  const displayChatbotMessage = (message) => {
    if (isChatbotTyping) {
      clearInterval(typingIntervalId);
      setIsChatbotTyping(false);
    }
    setChatMessages((prev) => [...prev, { message, type: "chatbot" }]);
  };

  const displayTypingIndicator = () => {
    if (!isChatbotTyping) {
      setIsChatbotTyping(true);
      clearInterval(typingIntervalId);
      const id = setInterval(() => {
        setTypingIndicatorMessage((prev) => {
          if (prev === "Typing...") return "Typing";
          if (prev === "Typing") return "Typing.";
          if (prev === "Typing.") return "Typing..";
          return "Typing...";
        });
      }, 400);
      setTypingIntervalId(id);
    }
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;
    displayUserMessage(userInput);
    displayTypingIndicator();
    try {
      const res = await fetch(`http://127.0.0.1:${EXPRESS_PORT}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      displayChatbotMessage(data.message);
      setIsChatbotTyping(false);
    } catch (err) {
      displayChatbotMessage(`Sorry an error has occurred... (${err})`);
      setIsChatbotTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      displayChatbotMessage(`Hi, I'm TraveBot. How can I help you today?`);
    }
  }, []);

  return (
    <div id="ChatBot" className="chat-container">
      <div className="chat-title">
        <span>Chat With TraveBot</span>
        <button className="chat-close-btn" onClick={onClose} aria-label="Close chat">
          ×
        </button>
      </div>

      <ChatBody
        chatMessages={chatMessages}
        isChatbotTyping={isChatbotTyping}
        typingIndicatorMessage={typingIndicatorMessage}
      />

      <ChatInput
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message here..."
        onClick={sendMessage}
      />
    </div>
  );
};

export default Chat;
