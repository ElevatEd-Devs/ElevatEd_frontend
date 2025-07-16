import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./index.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="main-page-container">
      <div className="app-layout flex">
        {/* Persistent Sidebar */}
        <div className="sidebar-container">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
        
        {/* Main Content Area */}
        <div className="main-content-area flex-1">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
