import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CourseDashboard from "./pages/CoursePage.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/CoursePage" element={<CourseDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
