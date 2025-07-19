/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BookOpen, Triangle} from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CalendarSnippet from '../components/CalendarSnippet';
import GradeGauge from '../components/GradeGauge';

export default function CourseDashboard() {
  const [selectedCourse, setSelectedCourse] = useState('Introduction to Psychology');

  /*Mock Data we'll mimic from the dataset */

  const courses = [
    { name: 'Course Name', icon: BookOpen },
    { name: 'Course Name', icon: Triangle },
  ];

  const enrolledCourses = [
    { name: 'Blank Course', icon: Triangle, color: 'text-yellow-500' },
  ];

  // Course-specific assignments and grades
  const courseAssignments = [
    { name: 'Midterm Exam', type: 'Exam', percentage: 92, points: '92/100', weight: '25%' },
    { name: 'Research Paper', type: 'Assignment', percentage: 88, points: '88/100', weight: '20%' },
    { name: 'Quiz 1', type: 'Quiz', percentage: 95, points: '19/20', weight: '10%' },
    { name: 'Quiz 2', type: 'Quiz', percentage: 85, points: '17/20', weight: '10%' },
    { name: 'Participation', type: 'Participation', percentage: 90, points: '90/100', weight: '15%' },
  ];

  // Calculate overall grade for the course
  const overallGrade = 87;

  const calendarEvents = [
    {
      time: 'Blah',
      title: 'Blah',
      subtitle: 'Blah',
      duration: 'Blah',
      type: 'Blah'
    },
    {
      time: 'Blah',
      title: 'Blah',
      type: 'Blah'
    },
    {
      time: 'Blah',
      title: 'Blah',
      type: 'Blah'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
        {/*Header */}
        <div>
            <Header/>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-600 text-white h-screen">
            {/* Header */}
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-8 h-8" />
                <h1 className="text-xl font-bold">Course</h1>
              </div>
              <div className="text-sm opacity-90">Username</div>
            </div>

            {/* Navigation */}
            <nav className="px-4 space-y-2">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    course.active ? 'bg-gray bg-opacity-20' : 'hover:bg-black hover:bg-opacity-10'
                  }`}
                  onClick={() => setSelectedCourse(course.name)}
                >
                  <course.icon className="w-5 h-5" />
                  <span className="text-sm">{course.name}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white">
            {/* Top Bar */}
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-sm text-blue-600">📧</span>
                  </div>
                  <span className="font-medium">Email</span>
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Center Content */}
              <div className="flex-1 p-6">
                {/* Course Header */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">{selectedCourse}</h2>
                  
                  {/* Grades Section with Gauge */}
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                    <h3 className="text-lg font-medium mb-4">Grade Overview</h3>
                    
                    {/* Overall Grade Gauge */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="text-center">
                        <GradeGauge percentage={overallGrade} size={120} strokeWidth={10} />
                        <p className="text-sm text-gray-600 mt-2">Overall Grade</p>
                        <p className="text-lg font-bold text-gray-800">B+</p>
                      </div>
                    </div>
                    
                    {/* Assignment Breakdown */}
                    <div className="grid grid-cols-3 gap-4">
                      {courseAssignments.map((assignment, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                          <div className="mb-2">
                            <GradeGauge percentage={assignment.percentage} size={80} strokeWidth={6} />
                          </div>
                          <div className="text-sm font-medium text-gray-900">{assignment.name}</div>
                          <div className="text-xs text-gray-500 mb-1">{assignment.type}</div>
                          <div className="text-sm font-bold text-gray-800">{assignment.points}</div>
                          <div className="text-xs text-blue-600">{assignment.weight}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Email</h3>
                  <div className="text-sm text-gray-500">Enrolled Courses</div>
                </div>

                {/* Enrolled Courses List */}
                <div className="space-y-2">
                  {enrolledCourses.map((course, index) => (
                    <div key={index} className="flex items-center space-x-3 py-2 hover:bg-gray-50 rounded">
                      <course.icon className={`w-4 h-4 ${course.color}`} />
                      <span className="text-sm">{course.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar - Calendar */}
              <div className="w-80 bg-gray-50 p-6 h-screen">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Calendar</h3>
                  </div>

                  {/* Calendar Header */}
                  <div>
                    <CalendarSnippet></CalendarSnippet>
                  </div>

                  {/* Calendar Events */}
                  <div className="space-y-3">
                    {calendarEvents.map((event, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-blue-600 font-medium">{event.time}</span>
                          {event.duration && (
                            <span className="text-xs text-gray-500">{event.duration}</span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">{event.title}</div>
                        {event.subtitle && (
                          <div className="text-xs text-gray-500">{event.subtitle}</div>
                        )}
                        
                        {/* Event Type Indicators */}
                        {event.type === 'exam' && (
                          <div className="mt-2">
                            <div className="text-xs text-gray-500 mb-1">So:col 20M</div>
                            <div className="w-full bg-blue-600 rounded h-1"></div>
                          </div>
                        )}
                        {event.type === 'homework' && (
                          <div className="w-full bg-blue-600 rounded h-1 mt-2"></div>
                        )}
                        {event.type === 'presentation' && (
                          <div className="mt-2 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <span>▼</span>
                              <span>Project Presentation</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}