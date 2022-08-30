import React from "react";

function SingleCampus({ campus }) {
  const { name, imageUrl, address, description } = campus;
  return (
    <div className="container">
      <h1>{name}</h1>
      <img src={imageUrl} />
      <h2>{address}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SingleCampus;
