import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Campuses from "./components/campuses";
import Students from "./components/students";
import { useSelector, useDispatch } from "react-redux";
import { setStudents } from "./store/actions/studentActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStudents());
  }, [dispatch]);
  const students = useSelector((state) => state.students);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="students">Students</Link>
          </li>
          <li>
            <Link to="campuses">Campuses</Link>
          </li>
        </ul>
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
