import React from "react";
import "./App.css";
import HomePage from "./components/Home/Home";
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LogoBar from "./components/LogoBar/LogoBar";
import Genres from "./components/EventFilters/Genres"
import ProfilePage from "./components/ProfilePage/ProfilePage";
import RegistrationPage from "./components/Registration/RegistrationPage";
function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <div className="content">
                    <LogoBar/>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path= "/genres" element={<Genres/>}/>
                        <Route path= "/places" element={<Genres/>}/>
                        <Route path= "/events" element={<Genres/>}/>
                        <Route path= "/profile" element={<ProfilePage/>}/>
                        <Route path= "/registration" element={<RegistrationPage/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
