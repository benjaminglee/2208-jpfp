import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCampus } from "../../store/actions/campusActions";
import UpdateCampus from "./updateCampusForm";

function SingleCampus() {
  const campusId = useParams().campusId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCampus(campusId));
  }, [dispatch]);
  const campus = useSelector((state) => state.campus);
  const { name, imageUrl, address, description } = campus;
  const students = campus.students;

  return (
    <div className="container">
      <h1>{name}</h1>
      <img src={imageUrl} />
      <h2>{address}</h2>
      <p>{description}</p>
      <p>{students?.length ? "Enrollees:" : "No students attending."}</p>
      {students?.map((student) => {
        return (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
            <button>Unregister</button>
          </div>
        );
      })}
      <UpdateCampus />
    </div>
  );
}

export default SingleCampus;
