import React from "react";
import SingleStudent from "./singleStudent";
import { useSelector } from "react-redux";

function Students() {
  const students = useSelector((state) => state.students);
  const list = [
    {
      firstName: "Ben",
      lastName: "Lee",
      email: "gmail.com",
      imageUrl: ":^)",
      gpa: 4,
    },
    {
      firstName: "Sara",
      lastName: "Emerson",
      email: "studio@gmail.com",
      imageUrl: ":^)",
      gpa: 4,
    },
    {
      firstName: "Jonah",
      lastName: "D",
      email: "music@gmail.com",
      imageUrl: ":^)",
      gpa: 4,
    },
    {
      firstName: "John",
      lastName: "O",
      email: "gmail.com",
      imageUrl: ":^)",
      gpa: 4,
    },
  ];

  return (
    <>
      {students.map((student) => (
        <SingleStudent key={student.firstName} student={student} />
      ))}
    </>
  );
}

export default Students;
