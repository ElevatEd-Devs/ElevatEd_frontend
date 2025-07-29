import React from "react";
import Card from "../components/Card.jsx";
import Events from "../components/Events";
import WeeklyEventCard from "../components/WeeklyEventCard";
import AccordionContainer from "../components/AccordionContainer";
import GradeSnapshot from "../components/GradeSnapshot";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = ({ onViewCourse }) => {
  return (
<<<<<<< HEAD
    <div id="home-container" className="flex row">
      <div
=======
    <div>
      <Header></Header>
      <div id="home-container" className="flex row">
      {/* <Header></Header> */}
      <div className="sidebar-container">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      <div 
>>>>>>> origin/main
        id="card-container"
        className="flex row flex-wrap gap-4 items-center justify-between mx-auto p-4"
      >
        <Card onViewCourse={onViewCourse} />
        <Card onViewCourse={onViewCourse} />
        <Card onViewCourse={onViewCourse} />
        <Card onViewCourse={onViewCourse} />
        <Card onViewCourse={onViewCourse} />
        <Card onViewCourse={onViewCourse} />
      </div>
      <div id="event-container" className="">
        <Events /> {/* Events  and To do */}
      </div>
    </div>
    <Footer></Footer>
    </div>
    
  );
};

export default Home;
