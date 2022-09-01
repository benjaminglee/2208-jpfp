import React from "react";
import SingleStudent from "./singleStudent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../store/actions/studentActions";

function Students() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  return (
    <div className="campusList">
      {students.map((student) => (
        <div className="studentThumbnail" key={student.id}>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteStudent(student));
            }}
          >
            x
          </button>
          <Link to={`/students/${student.id}`}>
            <div>
              <p>
                {student.firstName} {student.lastName}
              </p>
              <img src={student.imageUrl} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Students;
