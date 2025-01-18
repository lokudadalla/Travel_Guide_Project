import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero.jsx'
import Navbar2 from './components/Navbar2.jsx'
import PlanYourTrip from './components/Plan.jsx'
import Footer1 from './components/Footer1.jsx'
import Slide from './components/Slide.jsx'
import Chat from './chat/Chat.jsx'
import './css/App.css'


function App() {
    return (
      <div>
        <Navbar2/>
        <Hero/>
        <PlanYourTrip/>
        <Chat />
        <Slide/>
        <Footer1/>
        
      </div>
    )
  }

export default App



