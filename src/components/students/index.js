import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../../store/actions/studentActions";

function Students() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const campuses = useSelector((state) => state.campuses);
  return (
    <div className="itemList">
      {students.map((student) => (
        <div className="thumbnail" key={student.id}>
          <Link to={`/students/${student.id}`}>
            <div>
              <p className="name">
                {student.firstName} {student.lastName}
              </p>
              <p className="email">{student.email}</p>
              <p className="campusInfo">
                {student.campusId &&
                campuses.find((campus) => campus.id === student.campusId)
                  ? `Attending: ${
                      campuses.find((campus) => campus.id === student.campusId)
                        ?.name
                    }`
                  : "Not attending a campus."}
              </p>
            </div>
          </Link>
          <button
            className="delete"
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteStudent(student));
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default Students;
