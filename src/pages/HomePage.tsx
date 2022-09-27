import React from "react";
import "./HomePage.css";
import MenuBar from "../components/MenuBar";
import Button from "@mui/material/Button";
import MySketch from "../components/MySketch";
import { useIsMobile } from "../hooks/is-mobile";

function HomePage() {
  const mainButtons = ["Hours", "Guides"];
  const isMobile = useIsMobile();
  return (
    <div className="HomePage">
      <MenuBar />
      <div className="HomeContainer">
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
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  fontWeight: "600",
                  borderRadius: "3px",
                  borderWidth: "2px",
                  px: isMobile ? "1.2rem" : "3.5rem",
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
        <div className="SketchContainer">
          <MySketch
            screenWidth={window.innerWidth}
            screenHeight={window.innerHeight}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
