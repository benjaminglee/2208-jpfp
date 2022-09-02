import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { setStudent } from "../../store/actions/studentActions";

function SingleStudent() {
  const studentId = useParams().studentId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStudent(studentId));
  }, [dispatch]);
  const student = useSelector((state) => state.student);
  const { firstName, lastName, imageUrl, gpa, email, campus } = student;
  return (
    <div className="container">
      <h1>
        {firstName} {lastName}
      </h1>
      <img src={imageUrl} />
      <h2>GPA: {gpa}</h2>
      <p>{email}</p>
      {campus ? (
        <p>
          Attending:
          <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
        </p>
      ) : (
        <p>Not attending a campus.</p>
      )}
    </div>
  );
}

export default SingleStudent;
