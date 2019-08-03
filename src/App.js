import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/MainComponent";

function App() {
  return (
    <div className="App">
      {/* Using App header styles */}
      <header className="App-header">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
