import React, { useState } from "react";
import WeeklyEventProgressBar from "./WeeklyEventProgressBar";
import WeeklyEventTab from "./WeeklyEventTab";
import { map } from "jquery";
import WeeklyEventTabContent from "./WeeklyEventTabContent";

export default function WeeklyEventCard() {
  const [activeTab, setActiveTab] = useState("monday");
  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  return (
    <div className="w-full mt-20 max-w-xl mx-auto">
      <div className="bg-gray-500 p-2 rounded-t-lg">
        <div className="flex justify-center space-x-4">
          {daysOfWeek.map((day) => (
            <WeeklyEventTab
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              Day={day}
            />
          ))}
        </div>
      </div>
      <WeeklyEventProgressBar />
      {daysOfWeek.map((day) => (
        <WeeklyEventTabContent activeTab={activeTab} Day={day} />
      ))}
    </div>
  );
}
