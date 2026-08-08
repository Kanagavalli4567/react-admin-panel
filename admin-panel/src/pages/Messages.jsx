import { useState } from "react";

function Messages() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Rahul",
      text: "Hello, I need help with my order.",
      time: "10:30 AM",
    },
    {
      id: 2,
      name: "Priya",
      text: "When will my order arrive?",
      time: "11:15 AM",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        name: "You",
        text: message,
        time: "Just now",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Messages</h1>
          <p>Communicate with your customers.</p>
        </div>
      </div>

      <div className="messages-container">
        <div className="message-list">
          {messages.map((item) => (
            <div className="message-item" key={item.id}>
              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <strong>{item.name}</strong>
                <p>{item.text}</p>
                <small>{item.time}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="message-input">
          <input
            value={message}
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            className="primary-btn"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;