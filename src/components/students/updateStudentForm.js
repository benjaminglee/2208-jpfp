import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStudent, setStudent } from "../../store/actions/studentActions";

const UpdateStudent = () => {
  const campuses = useSelector((state) => state.campuses);
  const currentStudent = useSelector((state) => state.student);
  const {
    firstName: currFirstName,
    lastName: currLastName,
    imageUrl: currImageUrl,
    email: currEmail,
    gpa: currGpa,
    campusId: currCampusId,
  } = currentStudent;
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGPA] = useState("");
  const [campusId, setCampusId] = useState(currCampusId);
  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const student = {
      firstName: firstName.length ? firstName : currFirstName,
      lastName: lastName.length ? lastName : currLastName,
      imageUrl: imageUrl.length ? imageUrl : currImageUrl,
      email: email.length ? email : currEmail,
      gpa: gpa.length ? gpa : currGpa,
      campusId,
      id: currentStudent.id,
    };
    await dispatch(updateStudent(student));
    await dispatch(setStudent(currentStudent.id));
    setfirstName("");
    setlastName("");
    setImageUrl("");
    setEmail("");
    setGPA("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="formTitle">Update Student</p>
      <label htmlFor="firstName">First Name:</label>
      <input
        name="firstName"
        value={firstName}
        placeholder={currFirstName}
        onChange={(event) => setfirstName(event.target.value)}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        name="lastName"
        value={lastName}
        placeholder={currLastName}
        onChange={(event) => setlastName(event.target.value)}
      />
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        name="imageUrl"
        value={imageUrl}
        placeholder={currImageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={email}
        placeholder={currEmail}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="gpa">GPA:</label>
      <input
        name="gpa"
        value={gpa}
        placeholder={currGpa}
        onChange={(event) => setGPA(event.target.value)}
      />
      <label htmlFor="campusSelect">Campus:</label>
      <select name="campusSelect" onChange={(e) => setCampusId(e.target.value)}>
        <option value={currCampusId}>No Change</option>
        {campuses.length
          ? campuses
              .filter((campus) => campus.id !== currCampusId)
              .map((campus) => {
                return (
                  <option value={campus.id} key={campus.id}>
                    {campus.name}
                  </option>
                );
              })
          : null}
      </select>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UpdateStudent;
