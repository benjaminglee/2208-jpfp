import React from "react";
import { Route, Routes } from "react-router-dom";
import Campuses from "./components/campuses";
import Students from "./components/students";

function App() {
  return (
    <>
      <nav></nav>
      <main className="container">
        <Routes>
          <Route path="/" element=":)" />
          <Route path="campuses" element={<Campuses />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
