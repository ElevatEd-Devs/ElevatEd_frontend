import React from "react";
import Card from "../components/Card";
import Events from "../components/Events";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import WeeklyEventCard from "../components/WeeklyEventCard";
import AccordionContainer from "../components/AccordionContainer";
import GradeSnapshot from "../components/GradeSnapshot";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Header></Header>
      <div id="home-container" className="flex row">
      {/* <Header></Header> */}
      <div className="sidebar-container">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      <div 
        id="card-container"
        className="flex row flex-wrap gap-4 items-center justify-between mx-auto p-4"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div id="event-container" className="">
        <Events /> {/* Events  and To do */}
      </div>
      {/* </div> */}
    </div>
    <Footer></Footer>
    </div>
    
  );
};

export default Home;
