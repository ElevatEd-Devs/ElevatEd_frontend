import React, { useState } from "react";

export default function WeeklyEventCard() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full mt-20 max-w-xl mx-auto">
      <div className="bg-blue-500 p-2 rounded-t-lg">
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 text-white font-semibold border-b-4 border-blue-700 hover:bg-blue-700 focus:outline-none tab-button ${
              activeTab === "tab1" ? "active" : ""
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Mon
          </button>
          <button
            className={`px-4 py-2 text-white font-semibold border-b-4 border-blue-700 hover:bg-blue-700 focus:outline-none tab-button ${
              activeTab === "tab2" ? "active" : ""
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Tues
          </button>
          <button
            className={`px-4 py-2 text-white font-semibold border-b-4 border-blue-700 hover:bg-blue-700 focus:outline-none tab-button ${
              activeTab === "tab3" ? "active" : ""
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            Wed
          </button>
        </div>
      </div>
      <div
        id="tab1"
        className={`p-4 tab-content bg-white shadow-md rounded-lg ${
          activeTab !== "tab1" ? "hidden" : ""
        }`}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">
          Tab 1 Content
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          pariatur fugit culpa, sequi labore ducimus blanditiis neque ullam,
          quae vitae temporibus optio, quo reprehenderit nihil totam deserunt
          dolor error ratione!
        </p>
      </div>
      <div
        id="tab2"
        className={`p-4 tab-content bg-white shadow-md rounded-lg ${
          activeTab !== "tab2" ? "hidden" : ""
        }`}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">
          Tab 2 Content
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius rem
          reiciendis, ducimus nam soluta esse natus! Laudantium officiis
          necessitatibus consequatur molestiae quaerat, doloribus enim
          accusamus, quibusdam repellendus, voluptate optio possimus.
        </p>
      </div>
      <div
        id="tab3"
        className={`p-4 tab-content bg-white shadow-md rounded-lg ${
          activeTab !== "tab3" ? "hidden" : ""
        }`}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">
          Tab 3 Content
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae non
          adipisci sapiente laudantium nihil et atque cumque, eveniet corporis
          obcaecati maiores commodi voluptatem ut totam saepe quis fugit
          consequuntur unde.
        </p>
      </div>
    </div>
  );
}
