import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "bot" | "user"; time: string }[]>(
    [{ text: "Olá! Como posso ajudar hoje?", sender: "bot", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
  );
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { text: inputValue, sender: "user", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isExpanded && !e.currentTarget.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded && messages.length === 1) {
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: "Por favor, escreva sua dúvida abaixo.", sender: "bot", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
        ]);
      }, 2000);
    }
  }, [isExpanded]);

  useEffect(() => {
    const chatScroll = document.getElementById("chat-scroll");
    if (chatScroll) {
      chatScroll.scrollTop = chatScroll.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="absolute bottom-4 right-4 z-50" onClick={handleClickOutside}>
      {/* Chatbot Circle */}
      <motion.div
        className="w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{ scale: isExpanded ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-white font-bold">AI</span>
      </motion.div>

      {/* Chatbot Expanded Box */}
      {isExpanded && (
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-[80vh] bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col justify-between self-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 scrollbar-hidden" id="chat-scroll">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded mb-2 flex ${
                  message.sender === "bot" ? "bg-blue-600 text-white self-start w-[75%]" : "bg-white text-black self-start w-[75%] "
                }`}
                style={message.sender === "user" ? { marginLeft: "auto" } : { marginRight: "auto" }}
              >
                <div className="flex flex-col align-end">
                  <span>{message.text}</span>
                  <span className="text-xs text-gray-400 mt-1 self-end">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-white p-2 rounded focus:outline-none text-right"
            />
            <button
              onClick={() => {
                handleSendMessage();
                setTimeout(() => {
                  const chatScroll = document.getElementById("chat-scroll");
                  if (chatScroll) {
                    chatScroll.scrollTop = chatScroll.scrollHeight;
                  }
                }, 100);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
