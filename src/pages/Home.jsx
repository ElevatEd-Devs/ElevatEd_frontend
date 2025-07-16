import React from "react";
import Card from "../components/Card";
import Events from "../components/Events";
import WeeklyEventCard from "../components/WeeklyEventCard";
import AccordionContainer from "../components/AccordionContainer";
import GradeSnapshot from "../components/GradeSnapshot";

const Home = () => {
  return (
    <div id="home-container" className="flex row">
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
    </div>
  );
};

export default Home;
