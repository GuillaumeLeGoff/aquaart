import React from "react";
import CompetitionPage from "./page/CompetitionPage";
import WebSocketApp from "./page/WebSocketPage";

function App() {
  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <WebSocketApp />
     {/*  <CompetitionPage /> */}
    </div>
  );
}

export default App;
