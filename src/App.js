import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Campuses from "./components/campuses";
import Students from "./components/students";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
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
