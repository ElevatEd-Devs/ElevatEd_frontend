import React from "react";
import Card from "../components/Card";
import Events from "../components/Events";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div id="home-container" className="flex row">
      <div className="sidebar-container">
        <button
          onClick={() => {
            setShowSidebar(() => !showSidebar);
          }}
        >
          Button
        </button>
        <Sidebar show={showSidebar} />
      </div>
      <div
        id="card-container"
        className="flex row flex-wrap gap-4 items-center justify-between mx-auto p-4"
        // onClick={() => {
        //   if (showSidebar === true) {
        //     setShowSidebar(() => !showSidebar);
        //   }
        // }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div
        id="event-container"
        className=""
        onClick={() => {
          if (showSidebar === true) {
            setShowSidebar(() => !showSidebar);
          }
        }}
      >
        <Events /> {/* Events  and To do */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
