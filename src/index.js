import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import TimeLinePage from "./pages/timeline";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router basename="/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/timeline" element={<TimeLinePage />} />
        </Routes>
    </Router>
);
