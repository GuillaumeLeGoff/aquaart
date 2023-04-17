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
    <h2>Formulaire de test pour websocket</h2>
    
    <ul>
      <li><strong>Adresse IP :</strong> Entrez l'adresse IP de votre serveur websocket (par exemple, http://localhost:8080).</li>
      <li><strong>Écrivez votre message ici :</strong> Entrez le message que vous souhaitez envoyer au serveur websocket.</li>
      <li><strong>Envoyer :</strong> Cliquez sur le bouton "Envoyer" pour envoyer votre message au serveur websocket.</li>
    </ul>
    
    <form onSubmit={sendMessage}>
      <label htmlFor="ipAddress">Adresse IP :</label>
      <input
        type="text"
        id="ipAddress"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
        placeholder="Entrez l'adresse IP"
      />
      <br />
      <label htmlFor="inputMessage">Écrivez votre message ici :</label>
      <input
        type="text"
        id="inputMessage"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Entrez votre message ici"
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
