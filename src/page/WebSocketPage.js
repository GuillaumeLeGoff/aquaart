import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const ws = new WebSocket("wss://192.168.0.166:7890");

    ws.onopen = (event) => {
      console.log('Connected to server');
    };

    ws.onmessage = function (event) {
      setMessage(event.data);
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    const ws = new WebSocket("wss://192.168.0.166:7890");
    ws.send(input);
  };

  return (
    <div>
      <h1>React Web Socket</h1>
      <p>Received message: {message}</p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default App;
