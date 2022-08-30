import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Campuses from "./components/campuses";
import Students from "./components/students";
import { useSelector, useDispatch } from "react-redux";
import { setStudents } from "./store/actions/studentActions";
import { setCampuses } from "./store/actions/campusActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCampuses());
    dispatch(setStudents());
  }, [dispatch]);
  const students = useSelector((state) => state.students);
  return (
    <>
      <nav id="nav">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="students">Students</Link>
        </span>
        <span>
          <Link to="campuses">Campuses</Link>
        </span>
      </nav>
      <main className="container">
        <Routes>
          <Route index element=":)" />
          <Route path="campuses" element={<Campuses />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
