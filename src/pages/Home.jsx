import React from "react";
import Header from "../components/Header";
import mainContentArea from "./mainContentArea";
import CoursePage from "./CoursePage";
import Footer from "../components/Footer";

export default function Home({currentView, handleViewCourse, selectedCourse, handleBackToHome}){ 
    return(
        <div className="main-content-area flex-1">
        <Header />
        {currentView === 'home' ? (
            <mainContentArea onViewCourse={handleViewCourse} />
        ) : (
            <CoursePage courseData={selectedCourse} onBackToHome={handleBackToHome} />
        )}
        <Footer />
        </div>
    )
}
