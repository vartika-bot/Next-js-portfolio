import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { sender: 'user', text: input }]);
    
    // Simulate bot response
    setInput('');
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botResponse }
      ]);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    // Predefined bot responses
    if (lowerCaseInput.includes('hello')) {
      return 'Hi there! How can I assist you today?';
    } else if (lowerCaseInput.includes('help')) {
      return 'I am here to help you with mental wellness resources and guidance.';
    } else if (lowerCaseInput.includes('what is mental wellness')) {
      return 'Mental wellness refers to a state of well-being where you feel good emotionally, mentally, and socially. It involves a balanced lifestyle, stress management, and seeking help when needed.';
    } else if (lowerCaseInput.includes('resources')) {
      return 'Here are some resources: 1) Mindfulness apps, 2) Guided meditation videos, 3) Professional counseling services. Let me know if you want more information on any of these.';
    } else if (lowerCaseInput.includes('therapy')) {
      return 'Therapy can be a great way to manage stress and anxiety. Would you like more information on different types of therapy or local therapists?';
    } else if (lowerCaseInput.includes('stress')) {
      return 'To manage stress, you can try deep breathing exercises, exercise regularly, maintain a balanced diet, and take breaks throughout the day.';
    } else if (lowerCaseInput.includes('goodbye') || lowerCaseInput.includes('bye')) {
      return 'Goodbye! Take care, and feel free to reach out anytime.';
    } else if (lowerCaseInput.includes('thank you')) {
      return 'You are very welcome! If you need anything else, I’m here to help.';
    } else if (lowerCaseInput.includes('how are you')) {
      return 'I am just a bot, but thank you for asking! How can I help you today?';
    } else if (lowerCaseInput.includes('joke') || lowerCaseInput.includes('funny')) {
      return 'Why did the scarecrow win an award? Because he was outstanding in his field!';
    } else {
      return 'I am sorry, I didn’t understand that. Can you please rephrase?';
    }
  };

  return (
    <div className="chatbot-container">
      <style>
        {`
          .chatbot-container {
            width: 100%;
            height: 400px;
            border: 2px solid #243642;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            background-color: #E2F1E7;
          }

          .chatbot-header {
            background-color: #243642;
            color: #E2F1E7;
            padding: 10px;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }

          .chatbot-messages {
            flex: 1;
            padding: 10px;
            overflow-y: auto;
            background-color: #629584;
            border-radius: 4px;
            color: #E2F1E7;
          }

          .message {
            margin-bottom: 10px;
            padding: 5px;
            border-radius: 4px;
            max-width: 80%;
            word-wrap: break-word;
          }

          .message.user {
            background-color: #387478;
            text-align: right;
            color: #E2F1E7;
          }

          .message.bot {
            background-color: #243642;
            text-align: left;
            color: #E2F1E7;
          }

          .chatbot-input {
            display: flex;
            border-top: 1px solid #243642;
            padding: 10px;
            background-color: #E2F1E7;
          }

          .chatbot-input input {
            flex: 1;
            padding: 5px;
            border: 1px solid #243642;
            border-radius: 4px;
            margin-right: 5px;
          }

          .chatbot-input button {
            background-color: #243642;
            color: #E2F1E7;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .chatbot-input button:hover {
            background-color: #387478;
          }
        `}
      </style>
      <div className="chatbot-header">
        <h4>Chat with Us</h4>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;