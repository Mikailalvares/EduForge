import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses";
import Footer from "./Footer";
import NavBar from "./NavBar";
import CourseTopics from "./CourseTopics";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
  }, []);

  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/" element={ <Courses courses={courses}/> } />
        <Route path="courses/:courseName" element={<CourseTopics />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
