import React from "react";
import GradeGauge from "../components/GradeGauge.jsx";

const CoursePage = ({ courseData, onBackToHome }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <button
            onClick={onBackToHome}
            className="mb-2 text-blue-600 hover:text-blue-800 flex items-center"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            {courseData?.courseName || "Course Overview"}
          </h1>
          <p className="text-gray-600 mt-1">
            {courseData?.courseDescription || "Course description"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overall Grade Card */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Overall Grade</h2>
            <div className="flex items-center justify-center">
              <GradeGauge percentage={87} size={120} strokeWidth={8} />
            </div>
            <div className="text-center mt-4">
              <p className="text-2xl font-bold text-gray-900">87%</p>
              <p className="text-gray-600">Current Grade</p>
            </div>
          </div>

          {/* Grade Breakdown */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Grade Breakdown</h2>
            <div className="space-y-4">
              {[
                { category: "Assignments", grade: 85, weight: "40%" },
                { category: "Quizzes", grade: 92, weight: "30%" },
                { category: "Midterm Exam", grade: 78, weight: "15%" },
                { category: "Final Project", grade: 95, weight: "15%" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16">
                      <GradeGauge
                        percentage={item.grade}
                        size={60}
                        strokeWidth={4}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.category}</h3>
                      <p className="text-sm text-gray-600">
                        Weight: {item.weight}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{item.grade}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Assignments */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Assignments</h2>
            <div className="space-y-3">
              {[
                {
                  name: "Essay on Machine Learning",
                  due: "Dec 15",
                  status: "Submitted",
                  grade: "92%",
                },
                {
                  name: "Data Analysis Project",
                  due: "Dec 20",
                  status: "In Progress",
                  grade: "—",
                },
                {
                  name: "Final Presentation",
                  due: "Dec 22",
                  status: "Not Started",
                  grade: "—",
                },
              ].map((assignment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded hover:bg-gray-50"
                >
                  <div>
                    <h3 className="font-medium">{assignment.name}</h3>
                    <p className="text-sm text-gray-600">
                      Due: {assignment.due}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        assignment.status === "Submitted"
                          ? "bg-green-100 text-green-800"
                          : assignment.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {assignment.status}
                    </span>
                    <p className="text-sm font-medium mt-1">
                      {assignment.grade}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Assignments Completed</span>
                <span className="font-medium">12/15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Attendance</span>
                <span className="font-medium">95%</span>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              {[
                { event: "Final Exam", date: "Dec 18", time: "10:00 AM" },
                {
                  event: "Project Presentation",
                  date: "Dec 22",
                  time: "2:00 PM",
                },
                { event: "Course Feedback", date: "Dec 25", time: "All Day" },
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-3">
                  <h3 className="font-medium text-sm">{item.event}</h3>
                  <p className="text-xs text-gray-600">
                    {item.date} at {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Resources */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">Course Resources</h2>
            <div className="space-y-2">
              {[
                "Syllabus",
                "Lecture Notes",
                "Assignments",
                "Reading List",
                "Discussion Forum",
              ].map((resource, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  {resource} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
