import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CourseDashboard from "./pages/CoursePage.jsx";
import CourseLayoutEditor from "./pages/CourseLayoutEditor.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoursePage" element={<CourseDashboard />} />
        <Route path="/CourseEditor" element={<CourseLayoutEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
