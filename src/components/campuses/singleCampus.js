import React from "react";

function SingleCampus({ campus }) {
  const { name, imageUrl, address, description } = campus;
  return (
    <div>
      <h1>{name}</h1>
      <p>{imageUrl}</p>
      <h2>{address}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SingleCampus;
