import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStudent } from "../../store/actions/studentActions";

const CreateStudent = () => {
  const campuses = useSelector((state) => state.campuses);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGPA] = useState("");
  const [campusId, setCampusId] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const student = {
      firstName,
      lastName,
      imageUrl: imageUrl === "" ? undefined : imageUrl,
      email,
      gpa,
      campusId: !parseInt(campusId) ? undefined : parseInt(campusId),
    };
    dispatch(createStudent(student));
    setfirstName("");
    setlastName("");
    setImageUrl("");
    setEmail("");
    setGPA("");
  };

  return (
    <form id="campus-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        name="firstName"
        value={firstName}
        onChange={(event) => setfirstName(event.target.value)}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        name="lastName"
        value={lastName}
        onChange={(event) => setlastName(event.target.value)}
      />
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        name="imageUrl"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="gpa">GPA:</label>
      <input
        name="gpa"
        value={gpa}
        onChange={(event) => setGPA(event.target.value)}
      />
      <label htmlFor="campusSelect">Campus:</label>
      <select name="campusSelect" onChange={(e) => setCampusId(e.target.value)}>
        <option value={0}>None</option>
        {campuses.length
          ? campuses.map((campus) => {
              return (
                <option value={campus.id} key={campus.id}>
                  {campus.name}
                </option>
              );
            })
          : null}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateStudent;
