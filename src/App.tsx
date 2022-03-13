import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Section from "./components/Section";
import Body from "./components/Body";

const HeaderText = `The Sunlab Consultants is the student-run program in charge of Brown University's department machines. 
Most hours the Sunlab (and other CIT labs) are open, Sunlab Consultants are on call to answer questions regarding machines in the department,
as well as help debug issues related to the use or connection of department machines.
`;

const HoursText = `The hours when a Sunlab Consultant is available in person within the Sunlab (sitting at 9a) to answer questions regarding machines in the department.`;

const BodyText = `For help outside of Sunlab hours, the Sunlab Consultants are available at the Brown University.`;

function App() {
  return (
    <div className="App">
      <MenuBar />
      <br />
      <br />
      <br />
      <br />
      <Section title="Sunlab Consultants" id="sunlab-consultants" />
      <Body bodyText={HeaderText} />
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
      <br />
      <br />
      <Section title="Hours" id="hours" />
      <Body bodyText={HoursText} />
      <iframe
        src="https://calendar.google.com/calendar/embed?src=brown.edu_4qtcbiian1ggmlu03ss54f478s%40group.calendar.google.com&ctz=America%2FNew_York"
        style={{ border: "5px solid #1A73E8", borderRadius: "5px" }}
        width="800"
        height="600"
        scrolling="no"
        title="Sunlab Consultants Calendar"
      ></iframe>
      <br />
      <br />
      <br />
      <Section title="Guides" id="guides" />
      <Body bodyText="Guides" />
      <br />
      <br />
      <br />
      <Section title="Contact" id="contact" />
      <Body bodyText={BodyText} />
    </div>
  );
}

export default App;
