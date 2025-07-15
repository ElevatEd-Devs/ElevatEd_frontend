import React from "react";

export default function GradeSnapshot() {
  return (
    <div class="grid grid-cols-1 gap-2 px-2 mt-8">
      <div class="flex items-center bg-white rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-green-400">Calculus 1</div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Exams</h3>
          <p class="text-3xl">A+</p>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Homework</h3>
          <p class="text-3xl">A+</p>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Quizes</h3>
          <p class="text-3xl">A+</p>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Participation</h3>
          <p class="text-3xl">A+</p>
        </div>
      </div>
    </div>
  );
}
