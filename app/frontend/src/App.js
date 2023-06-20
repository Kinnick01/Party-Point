import React from "react";
import "./App.css";
import HomePage from "./components/Home/Home";
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LogoBar from "./components/LogoBar/LogoBar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <div className="content">
                    <LogoBar/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
