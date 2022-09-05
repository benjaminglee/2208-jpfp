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
import CreateStudent from "./components/students/createStudentForm";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCampuses());
    dispatch(setStudents());
  }, [dispatch]);
  const students = useSelector((state) => state.students);
  const campuses = useSelector((state) => state.campuses);
  return (
    <>
      <nav id="nav">
        <Link to="students">
          <p className="navLink">{`Students (${students.length})`}</p>
        </Link>
        <Link to="campuses">
          <p className="navLink">{`Campuses (${campuses.length})`}</p>
        </Link>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="students" />} />
          <Route
            path="campuses"
            element={
              <div className="page">
                <Campuses />
                <CreateCampus />
              </div>
            }
          />
          <Route
            path="students"
            element={
              <div className="page">
                <Students />
                <CreateStudent />
              </div>
            }
          />
          <Route
            path="campuses/:campusId/"
            element={
              <>
                <SingleCampus />
              </>
            }
          />
          <Route
            path="students/:studentId/"
            element={
              <>
                <SingleStudent />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
