import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Section from "./components/Section";
import Body from "./components/Body";
import { useRef } from "react";

const FirstText = `The Sunlab Consultants is the student-run program in charge of Brown University's department machines. 
Most hours the Sunlab (and other CIT labs) are open, Sunlab Consultants are on call to answer questions regarding machines in the department,
as well as help debug issues related to the use or connection of department machines.
`;

function App() {
  return (
    <div className="App">
      <MenuBar />
      <br />
      <br />
      <br />
      <br />
      <Section title="Sunlab Consultants" />
      <Body bodyText={FirstText} />
      <br />
      <img
        src="http://cs.brown.edu/about/rooms/sunlab/about/images/sunlab.med.gif"
        alt="logo"
        style={{
          border: "5px solid #1A73E8",
          borderRadius: "5px",
        }}
      />
      <br />
      <Section title="Hours" />
      <Body bodyText={FirstText} />
      <br />
    </div>
  );
}

export default App;
