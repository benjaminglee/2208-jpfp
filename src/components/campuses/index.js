import React from "react";
import SingleCampus from "./singleCampus";
function Campuses() {
  const list = [
    {
      name: "School1",
      address: "Something something lane",
      description: "Body text goes here",
      imageUrl: ":^)",
    },
    {
      name: "School2",
      address: "Something something county",
      description: "Body text goes here",
      imageUrl: ":^)",
    },
    {
      name: "School3",
      address: "Something something city",
      description: "Unique description",
      imageUrl: ":^)",
    },
  ];

  return (
    <>
      {list.map((campus) => (
        <SingleCampus key={campus.name} campus={campus} />
      ))}
    </>
  );
}

export default Campuses;
