

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero.jsx';
import Navbar2 from './components/Navbar2.jsx';
import PlanYourTrip from './components/Plan.jsx';
import Footer1 from './components/Footer1.jsx';
import Slide from './components/Slide.jsx';
import './css/App.css';
import Button_new from "./components/Button_New.jsx";
import NextPage from "./Pages/NextPage.jsx"; // Import the new page
import Explore from "./Pages/Explore1.jsx"; // Import the new page


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Main Page */}
                    <Route path="/" element={
                        <>
                            <Navbar2 />
                            <Hero />
                            <PlanYourTrip />
                            <Slide />
                            <Footer1 />
                            {/* Persistent floating button */}
                            <Button_new
                                videoSrc="chatbot3.mp4"
                                customStyle={{
                                    position: 'fixed',
                                    bottom: '20px',
                                    right: '20px',
                                    zIndex: 100,
                                }}
                            />
                        </>
                    } />
                    {/* Next Page */}
                    <Route path="/next-page" element={<NextPage />} />
                    {/* Explore Page */}
                    <Route path="/explore" element={<Explore />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
