import React from "react";
const WidgetAdapter = ({ widgetId, isEditMode, onRemove, onConfigChange }) => {
  const [showSettings, setShowSettings] = useState(false);

  // Get widget configuration
  const widgetConfig = AVAILABLE_WIDGETS[widgetId];
  const WidgetComponent = widgetConfig?.Component;

  if (!WidgetComponent) {
    return <div className="p-4">Widget not found</div>;
  }

  // In edit mode, wrap with controls
  if (isEditMode) {
    return (
      <div className="relative h-full">
        {/* Edit controls - only in edit mode */}
        <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setShowSettings(true)}
            className="p-1 bg-blue-500 text-white rounded-full shadow-lg"
            aria-label="Settings"
          >
            ⚙️
          </button>
          <button
            onClick={() => onRemove(widgetId)}
            className="p-1 bg-red-500 text-white rounded-full shadow-lg"
            aria-label="Remove"
          >
            ✕
          </button>
        </div>

        {/* The actual widget component */}
        <WidgetComponent />

        {/* Settings modal (you can implement this later) */}
        {showSettings && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-20">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2">
                Settings for {widgetConfig.label}
              </h4>
              <button
                onClick={() => setShowSettings(false)}
                className="px-3 py-1 bg-gray-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // In view mode, render component directly
  return <WidgetComponent />;
};
export default WidgetAdapter;
