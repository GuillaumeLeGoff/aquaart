import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const WebSocketApp = () => {
 
  let webSocket = new WebSocket('wss://192.168.0.166:7890');
  webSocket.onmessage = function(e) { console.log(e)};
  webSocket.send("test");
  return (
    <div>
      <h2>Formulaire de test pour websocket</h2>

     
    </div>
  );
};

export default WebSocketApp;
