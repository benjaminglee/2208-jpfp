import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCampuses } from "../../store/actions/campusActions";
import axios from "axios";

function SingleCampus() {
  const campusId = useParams().campusId;
  const campuses = useSelector((state) => state.campuses);
  const campus = campuses.find((campus) => campus.id === +campusId);
  const students = useSelector((state) => state.students);
  const enrolled = students.filter((student) => student.campusId === +campusId);
  return (
    <div className="container">
      <h1>{campus?.name}</h1>
      <img src={campus?.imageUrl} />
      <h2>{campus?.address}</h2>
      <p>{campus?.description}</p>
      <p>{enrolled.length ? "Enrollees:" : null}</p>
      {enrolled.map((student) => {
        return (
          <Link key={student.id} to={`/students/${student.id}`}>
            {student.firstName} {student.lastName}
          </Link>
        );
      })}
    </div>
  );
}

export default SingleCampus;
