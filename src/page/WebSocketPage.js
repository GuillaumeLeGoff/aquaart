import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const WebSocketApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [ipAddress, setIpAddress] = useState("http://localhost:8080");
  const socketRef = useRef();

  useEffect(() => {
    if (!ipAddress) return;

    socketRef.current = io.connect(ipAddress);

    socketRef.current.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [ipAddress]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage) {
      socketRef.current.emit("message", inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          placeholder="Entrez l'adresse IP"
        />
        <br />
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Écrivez votre message ici"
        />
        <button type="submit">Envoyer</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketApp;
