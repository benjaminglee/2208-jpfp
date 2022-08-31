import React from "react";
import SingleCampus from "./singleCampus";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Campuses() {
  const campuses = useSelector((state) => state.campuses);
  return (
    <div className="campusList">
      {campuses.map((campus) => (
        <div className="campusThumbnail" key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>
            <div>
              <p> {campus.name}</p>
              <img src={campus.imageUrl} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Campuses;
