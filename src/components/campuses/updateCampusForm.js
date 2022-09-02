import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCampus } from "../../store/actions/campusActions";

const UpdateCampus = () => {
  const currentCampus = useSelector((state) => state.campus);
  const [campusName, setCampusName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newCampus = {
      name: campusName,
      imageUrl: imageUrl === "" ? undefined : imageUrl,
      address: address,
      description: description,
      id: currentCampus.id,
    };

    dispatch(updateCampus(newCampus));
    setCampusName("");
    setImageUrl("");
    setAddress("");
    setDescription("");
  };

  return (
    <form id="campus-form" onSubmit={handleSubmit}>
      <label htmlFor="campusName">Name:</label>
      <input
        name="campusName"
        value={campusName}
        onChange={(event) => setCampusName(event.target.value)}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        name="image"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <label htmlFor="address">Address:</label>
      <input
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="description">About:</label>
      <input
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateCampus;
