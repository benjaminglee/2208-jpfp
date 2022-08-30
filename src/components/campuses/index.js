import React from "react";
import SingleCampus from "./singleCampus";
import { useSelector } from "react-redux";

function Campuses() {
  const campuses = useSelector((state) => state.campuses);
  return (
    <>
      {campuses.map((campus) => (
        <SingleCampus key={campus.id} campus={campus} />
      ))}
    </>
  );
}

export default Campuses;
