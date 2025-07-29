import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./index.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentView, setCurrentView] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleViewCourse = (courseData) => {
    setSelectedCourse(courseData);
    setCurrentView("course");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedCourse(null);
  };

  return (
    <div className="main-page-container">
      <div className="app-layout flex">
        {/* Persistent Sidebar */}
        <div className="sidebar-container">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>

        {/* Main Content Area */}
        <Home
          currentView={currentView}
          handleViewCourse={handleViewCourse}
          selectedCourse={selectedCourse}
          handleBackToHome={handleBackToHome}
        />
      </div>
    </div>
  );
}

export default App;
