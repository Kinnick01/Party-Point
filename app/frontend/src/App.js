import React from "react";
import "./App.css";
import HomePage from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LogoBar from "./components/LogoBar/LogoBar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div className="content">
                    <LogoBar/>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
