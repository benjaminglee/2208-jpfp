import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

function SingleStudent() {
  const studentId = useParams().studentId;
  const students = useSelector((state) => state.students);
  const student = students.find((student) => student.id === +studentId);
  const campuses = useSelector((state) => state.campuses);
  const enrolledCampus = student
    ? campuses.filter((campus) => student.campusId === campus.id)[0]
    : null;
  return (
    <div className="container">
      <h1>
        {student?.firstName} {student?.lastName}
      </h1>
      <img src={student?.imageUrl} />
      <h2>GPA: {student?.gpa}</h2>
      <p>{student?.email}</p>
      <p>{enrolledCampus ? "Attending:" : "Not attending a campus."}</p>
      {enrolledCampus ? (
        <Link to={`/campuses/${enrolledCampus.id}`}>
          <div>{enrolledCampus.name}</div>
        </Link>
      ) : null}
    </div>
  );
}

export default SingleStudent;
