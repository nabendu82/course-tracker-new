import { useEffect, useState } from 'react';
import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  const [courses, setCourses] = useState([])

  const loadCourses = async () => {
    try{
      const res = await fetch('/.netlify/functions/courses');
      const courses = await res.json();
      setCourses(courses);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadCourses();
  },[])

  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Course Tracker</h1>
      <CourseForm courseAdded={loadCourses}/>
      <CourseList courses={courses} refreshCourses={loadCourses} />
    </div>
  );
}

export default App;
