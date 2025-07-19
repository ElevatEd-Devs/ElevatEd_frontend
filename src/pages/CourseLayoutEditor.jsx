import React, { useState, useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// Using a ResponsiveGridLayout for better adaptability
const ResponsiveGridLayout = WidthProvider(Responsive);

// --- Mock Widget Components ---
// These are simple placeholders for your actual widgets.
const AssignmentsWidget = () => (
  <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 h-full w-full">
    <h3 className="text-lg font-bold text-blue-800 mb-2">Assignments</h3>
    <ul className="list-disc list-inside text-blue-700">
      <li>Complete Project Proposal</li>
      <li>Read Chapter 4</li>
      <li>Peer Review Submissions</li>
    </ul>
  </div>
);

const CalendarWidget = () => (
  <div className="bg-green-100 border border-green-300 rounded-lg p-4 h-full w-full">
    <h3 className="text-lg font-bold text-green-800 mb-2">Calendar</h3>
    <div className="flex space-x-2">
      <div className="text-center">
        <p className="font-bold text-green-700">MON</p>
        <p>12</p>
      </div>
      <div className="text-center bg-green-200 rounded-full w-8 h-8 flex items-center justify-center">
        <p className="font-bold text-green-900">13</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-green-700">TUE</p>
        <p>14</p>
      </div>
    </div>
  </div>
);

// --- Component Configuration ---

// A map to easily access widget components by their key.
const AVAILABLE_WIDGETS = {
  assignments: {
    Component: AssignmentsWidget,
    label: "Assignments",
    defaultW: 6,
    defaultH: 2,
  },
  calendar: {
    Component: CalendarWidget,
    label: "Calendar",
    defaultW: 6,
    defaultH: 3,
  },
};

// Pre-defined layout templates.
const LAYOUT_TEMPLATES = {
  "Side by Side": [
    { i: "assignments", x: 0, y: 0, w: 6, h: 2 },
    { i: "calendar", x: 6, y: 0, w: 6, h: 3 },
  ],
  Stacked: [
    { i: "assignments", x: 0, y: 0, w: 6, h: 2 },
    { i: "calendar", x: 0, y: 2, w: 6, h: 3 },
  ],
  "Calendar Focus": [
    { i: "calendar", x: 0, y: 0, w: 6, h: 3 },
    { i: "assignments", x: 6, y: 0, w: 6, h: 2 },
  ],
};

// --- Main Component ---

export default function CourseLayoutEditor() {
  const [isEditing, setIsEditing] = useState(true);
  const [layouts, setLayouts] = useState({
    lg: LAYOUT_TEMPLATES["Side by Side"],
  });
  const [error, setError] = useState("");

  // Memoize the current layout to prevent unnecessary re-renders.
  const currentLayout = useMemo(() => layouts.lg || [], [layouts]);

  // Simplified handler for adding a new widget.
  const handleAddWidget = (widgetKey) => {
    if (currentLayout.some((widget) => widget.i === widgetKey)) {
      setError("Widget is already on the dashboard.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    const widgetConfig = AVAILABLE_WIDGETS[widgetKey];
    const newWidget = {
      i: widgetKey,
      x: 0, // react-grid-layout will find the best spot
      y: Infinity, // Places the new widget at the bottom
      w: widgetConfig.defaultW,
      h: widgetConfig.defaultH,
    };

    setLayouts((prev) => ({ ...prev, lg: [...prev.lg, newWidget] }));
    setError("");
  };

  // Handler for removing a widget.
  const handleRemoveWidget = (widgetKey) => {
    setLayouts((prev) => ({
      ...prev,
      lg: prev.lg.filter((widget) => widget.i !== widgetKey),
    }));
  };

  // Updates the layout state when the user drags or resizes widgets.
  const onLayoutChange = (layout, newLayouts) => {
    // Only update state if the layout has actually changed
    if (JSON.stringify(layouts) !== JSON.stringify(newLayouts)) {
      setLayouts(newLayouts);
    }
  };

  // Loads a layout from the predefined templates.
  const loadLayoutTemplate = (templateName) => {
    setLayouts({ lg: LAYOUT_TEMPLATES[templateName] });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- Header and Controls --- */}
        <div className="bg-white shadow-md rounded-xl p-4 mb-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Course Editor</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-colors"
            >
              {isEditing ? "Preview Dashboard" : "Edit Layout"}
            </button>
          </div>

          {/* --- Editing Controls --- */}
          {isEditing && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              {/* Add Widgets Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Add Widgets
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(AVAILABLE_WIDGETS).map(([key, { label }]) => (
                    <button
                      key={key}
                      onClick={() => handleAddWidget(key)}
                      className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                    >
                      + {label}
                    </button>
                  ))}
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              {/* Load Templates Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Load a Template
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(LAYOUT_TEMPLATES).map((name) => (
                    <button
                      key={name}
                      onClick={() => loadLayoutTemplate(name)}
                      className="px-3 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- Grid Layout --- */}
        <ResponsiveGridLayout
          className={`layout transition-all duration-500 ${
            isEditing ? "bg-gray-200/50 rounded-lg" : "bg-transparent"
          }`}
          layouts={layouts}
          onLayoutChange={onLayoutChange}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={100}
          isDraggable={isEditing}
          isResizable={isEditing}
          preventCollision={true}
          compactType="vertical"
        >
          {currentLayout.map((item) => {
            const WidgetComponent = AVAILABLE_WIDGETS[item.i]?.Component;
            return (
              <div
                key={item.i}
                className="relative group bg-white rounded-xl shadow-sm overflow-hidden"
              >
                {WidgetComponent ? (
                  <WidgetComponent />
                ) : (
                  <div className="p-4">Widget not found</div>
                )}
                {isEditing && (
                  <button
                    onClick={() => handleRemoveWidget(item.i)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label={`Remove ${AVAILABLE_WIDGETS[item.i]?.label}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
}
