import React from "react";
import WeeklyEventProgressBar from "./WeeklyEventProgressBar";

export default function WeeklyEventTabContent({ activeTab, Day }) {
  return (
    <div
      id={Day}
      className={`p-4 tab-content bg-white shadow-md rounded-lg ${
        activeTab !== Day ? "hidden" : ""
      }`}
    >
      <h2 className="text-2xl font-semibold mb-2 text-blue-700">
        {Day} Content
      </h2>
      <WeeklyEventProgressBar Size="3" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
        fugit culpa, sequi labore ducimus blanditiis neque ullam, quae vitae
        temporibus optio, quo reprehenderit nihil totam deserunt dolor error
        ratione!
      </p>
    </div>
  );
}
