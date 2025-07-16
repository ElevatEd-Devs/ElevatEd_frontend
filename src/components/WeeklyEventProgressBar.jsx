import React from "react";

export default function WeeklyEventProgressBar({ Size = "1" }) {
  return (
    <div
      class={`w-full max-w-xl mx-auto bg-gray-300 h-${Size} overflow-hidden`}
    >
      <div class="bg-blue-500 h-full w-1/2"></div>
    </div>
  );
}
