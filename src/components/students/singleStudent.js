import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { setStudent } from "../../store/actions/studentActions";
import UpdateStudent from "./updateStudentForm";

function SingleStudent() {
  const studentId = useParams().studentId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStudent(studentId));
  }, [dispatch]);
  const student = useSelector((state) => state.student);
  const { firstName, lastName, imageUrl, gpa, email, campus } = student;
  return (
    <div className="singlePageContainer">
      <div className="singlePageView">
        <h1 id="studentName">
          {firstName} {lastName}
        </h1>
        <div className="profile">
          <img src={imageUrl} />
        </div>
        <h2 id="gpa">GPA: {gpa}</h2>
        <p id="studentEmail">{email}</p>
        {campus ? (
          <p>
            Attending:
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
          </p>
        ) : (
          <p>Not attending a campus.</p>
        )}
      </div>
      <UpdateStudent />
    </div>
  );
}

export default SingleStudent;
