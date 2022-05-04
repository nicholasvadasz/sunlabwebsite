import React from "react";
import "./HomePage.css";
import MenuBar from "../components/MenuBar";
import Button from "@mui/material/Button";
import MySketch from "../components/MySketch";

function HomePage() {
  const mainButtons = ["Hours", "Guides"];
  return (
    <div className="HomePage">
      <MenuBar />
      <div className="Container">
        <div className="HeaderAndButtons">
          <h1 className="HeaderText">Welcome to {<br />}the Sunlab</h1>
          <div className="Buttons">
            {mainButtons.map((button) => (
              <Button
                variant="outlined"
                href={`${button.toLowerCase()}`}
                sx={{
                  color: "#F2E6C5",
                  borderColor: "white",
                  fontSize: "2rem",
                  fontWeight: "600",
                  borderRadius: "3px",
                  borderWidth: "2px",
                  px: "3.5rem",
                  "&:hover": {
                    borderColor: "#F2E6C5",
                    borderWidth: "2px",
                  },
                }}
              >
                {button}
              </Button>
            ))}
          </div>
        </div>
        <MySketch />
      </div>
    </div>
  );
}

export default HomePage;
