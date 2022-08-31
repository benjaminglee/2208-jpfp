import React, { useEffect } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Campuses from "./components/campuses";
import SingleCampus from "./components/campuses/singleCampus";
import SingleStudent from "./components/students/singleStudent";
import Students from "./components/students";
import { useSelector, useDispatch } from "react-redux";
import { setStudents } from "./store/actions/studentActions";
import { setCampuses } from "./store/actions/campusActions";
import CreateCampus from "./components/campuses/createCampusForm";

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
          <Link to="students">Students</Link>
        </span>
        <span>
          <Link to="campuses">Campuses</Link>
        </span>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="students" />} />
          <Route
            path="campuses"
            element={
              <>
                <CreateCampus />
                <Campuses />
              </>
            }
          />
          <Route path="students" element={<Students />} />
          <Route path="campuses/:campusId/" element={<SingleCampus />} />
          <Route path="students/:studentId/" element={<SingleStudent />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
