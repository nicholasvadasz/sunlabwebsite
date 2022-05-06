import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Button from "@mui/material/Button";
import Section from "./components/Section";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HoursPage from "./pages/HoursPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GuidesPage from "./pages/GuidesPage";
import GuidePage from "./pages/GuidePage";
import { IsMobileProvider } from "./hooks/is-mobile";

function App() {
  return (
    <div className="App">
      <IsMobileProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/hours" element={<HoursPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/guides/:guide" element={<GuidePage />} />
          </Routes>
        </Router>
      </IsMobileProvider>
    </div>
  );
}

export default App;
