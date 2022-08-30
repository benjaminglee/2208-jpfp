import React from "react";

function SingleStudent({ student }) {
  const { firstName, lastName, email, imageUrl, gpa } = student;
  return (
    <div>
      <h1>
        {firstName}
        {lastName}
      </h1>
      <h2>{email}</h2>
      <p>{imageUrl}</p>
      <p>{gpa}</p>
    </div>
  );
}

export default SingleStudent;
