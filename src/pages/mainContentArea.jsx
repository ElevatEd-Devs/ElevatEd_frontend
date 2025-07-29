
import React from "react";
import Card from "../components/Card.jsx";
import Events from "../components/Events.jsx";
import WeeklyEventCard from "../components/WeeklyEventCard.jsx";
import AccordionContainer from "../components/AccordionContainer.jsx";
import GradeSnapshot from "../components/GradeSnapshot.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const mainContentArea = ({ onViewCourse }) => {
  return (
    <div id="home-container" className="flex row">
      <div
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
    <Footer></Footer>    
    </div>
  );
};

export default mainContentArea;