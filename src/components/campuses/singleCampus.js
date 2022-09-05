import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCampus } from "../../store/actions/campusActions";
import UpdateCampus from "./updateCampusForm";
import { updateStudent } from "../../store/actions/studentActions";

function SingleCampus() {
  const [clicked, setClicked] = useState(false);
  const campusId = useParams().campusId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCampus(campusId));
  }, [dispatch]);
  const campus = useSelector((state) => state.campus);
  const { name, imageUrl, address, description } = campus;
  const students = campus.students;

  return (
    <div className="singlePageContainer">
      <div className="singlePageView">
        <h1 id="singlePageCampusTitle">{name}</h1>
        <div className="campusImage">
          <img src={imageUrl} />
        </div>
        <h2 id="singlePageCampusAddress">{address}</h2>
        <br></br>
        <p>{description}</p>
        <br></br>
        <p>{students?.length ? "Enrollees:" : "No students attending."}</p>
        <br></br>
        {students?.map((student) => {
          return (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
              <button
                className="unregister"
                onClick={async () => {
                  await dispatch(updateStudent({ ...student, campusId: null }));
                  await dispatch(setCampus(campusId));
                  setClicked(true);
                }}
              >
                Unregister
              </button>
            </div>
          );
        })}
      </div>
      <UpdateCampus />
    </div>
  );
}

export default SingleCampus;
