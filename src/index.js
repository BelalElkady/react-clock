import React from "react";
import ReactDOM from "react-dom";
import Header from "./header.js";
import Panel from "./panel";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Panel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
