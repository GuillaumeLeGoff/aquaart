import React from "react";

const WebSocketApp = () => {
 
  let webSocket = new WebSocket('ws://192.168.0.166:7890');
  webSocket.onmessage = function(e) { console.log(e)};
  webSocket.send("test");
  return (
    <div>
      <h2>Formulaire de test pour websocket</h2>

     
    </div>
  );
};

export default WebSocketApp;
