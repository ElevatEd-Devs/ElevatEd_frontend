import React from "react";
import CoursePage from "./CoursePage";

const CourseDetailPage = () => {
  // Sample course data (this would normally come from URL params or props)
  const sampleCourse = {
    id: "cs101",
    name: "Introduction to Computer Science",
    description: "Fundamentals of programming and algorithms.",
    grade: 87.5,
    assignmentsCompleted: "6/6",
    classAverage: "82.3%",
  };

  const upcomingEvents = [
    {
      id: "event1",
      title: "Midterm Exam - Calculus I",
      date: "July 20",
      time: "10:00 AM",
      course: "Calculus I",
    },
    {
      id: "event2",
      title: "Homework Due - History of Art",
      date: "July 21",
      time: "5:00 PM",
      course: "History of Art",
    },
    {
      id: "event3",
      title: "Project Presentation - Introduction to Psychology",
      date: "July 22",
      time: "1:00 PM",
      course: "Introduction to Psychology",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Back to Dashboard Button */}
      <button
        onClick={() => window.history.back()}
        className="mb-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
      >
        ← Back to Dashboard
      </button>

      {/* Course Header */}
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900">
          {sampleCourse.name}
        </h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Course Content */}
      <CoursePage course={sampleCourse} upcomingEvents={upcomingEvents} />
    </div>
  );
};

export default CourseDetailPage;
