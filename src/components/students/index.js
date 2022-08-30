import React from "react";
import SingleStudent from "./singleStudent";
import { useSelector } from "react-redux";

function Students() {
  const students = useSelector((state) => state.students);
  return (
    <>
      {students.map((student) => (
        <SingleStudent key={student.id} student={student} />
      ))}
    </>
  );
}

export default Students;
