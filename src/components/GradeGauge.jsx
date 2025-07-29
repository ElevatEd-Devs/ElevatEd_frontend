import React from 'react';

const GradeGauge = ({ percentage, size = 100, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

<<<<<<< HEAD
  // Color based on grade percentage
  const getColor = (percent) => {
    if (percent >= 90) return '#10B981'; // Green
    if (percent >= 80) return '#F59E0B'; // Yellow
    if (percent >= 70) return '#EF4444'; // Red
    return '#6B7280'; // Gray
=======
  // Color based on grade percentage - gradient from green (100) to red (70)
  const getColor = (percent) => {
    if (percent >= 100) return '#10B981'; // Pure green at 100
    if (percent >= 90) return '#22C55E'; // Slightly less green
    if (percent >= 85) return '#65C466'; // Green with slight yellow
    if (percent >= 80) return '#84CC16'; // Yellow-green
    if (percent >= 75) return '#EAB308'; // Yellow-orange
    if (percent >= 70) return '#F59E0B'; // Orange
    return '#EF4444'; // Red for below 70
>>>>>>> origin/main
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(percentage)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-gray-700">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default GradeGauge;