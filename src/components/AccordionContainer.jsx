import React from "react";

export default function AccordionContainer() {
  return (
    <div class="max-w-3xl mx-auto space-y-4">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <input type="checkbox" id="accordion1" class="peer hidden"></input>
        <label
          for="accordion1"
          class="flex items-center justify-between p-4 bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors"
        >
          <span class="text-lg font-semibold">Module</span>
          <svg
            class="w-6 h-6 transition-transform peer-checked:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </label>
        <div class="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
          <div class="p-4">
            <p class="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
