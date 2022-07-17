import React from "react";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
// import styles from "src/styles/App.module.scss";

function App() {
  return (
    <div className="App">
      <h1>
        <Navbar />
        <Body />
      </h1>
    </div>
  );
}

export default App;
