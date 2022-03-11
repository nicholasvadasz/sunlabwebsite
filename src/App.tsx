import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <img
        src="http://www2.cs.uh.edu/~acheng/ProfCheng_Brown.jpg"
        alt="sunlab"
        className="sunlab"
        style={{ objectFit: "cover", width: "100%", height: "1050px" }}
      />
      <h1>LOLOLOL</h1>
      <h1>LOLOLOL</h1>
      <h1>LOLOLOL</h1>
      <h1>LOLOLOL</h1>
      <h1>LOLOLOL</h1>
    </div>
  );
}

export default App;
