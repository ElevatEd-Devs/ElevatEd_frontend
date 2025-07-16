import React from "react";
import Card from "../components/Card.jsx";
import Events from "../components/Events";
import WeeklyEventCard from "../components/WeeklyEventCard";
import AccordionContainer from "../components/AccordionContainer";
import GradeSnapshot from "../components/GradeSnapshot";

const Home = ({ onViewCourse }) => {
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
    </div>
  );
};

export default Home;
