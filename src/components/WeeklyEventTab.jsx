import React from "react";

export default function WeeklyEventTab({ activeTab, setActiveTab, Day }) {
  const dayAbrev = {
    monday: "Mon",
    tuesday: "Tue",
    wednesday: "Wed",
    thursday: "Thur",
    friday: "Fri",
    saturday: "Sat",
    sunday: "Sun",
  };
  return (
    <button
      className={`px-4 py-2 text-white font-semibold border-blue-700 hover:text-blue-700 focus:outline-none tab-button ${
        activeTab === "${Day}" ? "active" : ""
      }`}
      onClick={() => setActiveTab(Day)}
    >
      {dayAbrev[Day]}
    </button>
  );
}
