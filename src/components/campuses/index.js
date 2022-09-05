import React from "react";
import { Link } from "react-router-dom";
import { deleteCampus } from "../../store/actions/campusActions";
import { useSelector, useDispatch } from "react-redux";

function Campuses() {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses);
  const students = useSelector((state) => state.students);
  return (
    <div className="itemList">
      {campuses.map((campus) => (
        <div className="thumbnail" key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>
            <div>
              <p className="name"> {campus.name}</p>
              <p className="email">{campus.address}</p>
            </div>
            <p className="campusInfo">
              {`Total Students Attending: (${
                students.filter((student) => student.campusId === campus.id)
                  .length
              })`}
            </p>
          </Link>
          <button
            className="delete"
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteCampus(campus));
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default Campuses;
