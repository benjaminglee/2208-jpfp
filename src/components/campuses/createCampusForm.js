import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampus } from "../../store/actions/campusActions";

const CreateCampus = () => {
  const [campusName, setCampusName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const campus = {
      name: campusName,
      imageUrl: imageUrl === "" ? undefined : imageUrl,
      address: address,
      description: description,
    };
    dispatch(createCampus(campus));
    setCampusName("");
    setImageUrl("");
    setAddress("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="formTitle">Create Campus</p>
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
      <textarea
        rows="5"
        cols="60"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CreateCampus;
