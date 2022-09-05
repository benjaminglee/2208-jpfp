import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCampus } from "../../store/actions/campusActions";

const UpdateCampus = () => {
  const currentCampus = useSelector((state) => state.campus);
  const {
    name: currName,
    imageUrl: currImageUrl,
    address: currAddress,
    description: currDescription,
    id: currId,
  } = currentCampus;
  const [campusName, setCampusName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newCampus = {
      name: campusName.length ? campusName : currName,
      imageUrl: imageUrl.length ? imageUrl : currImageUrl,
      address: address.length ? address : currAddress,
      description: description.length ? description : currDescription,
      id: currId,
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
        placeholder={currName}
        onChange={(event) => setCampusName(event.target.value)}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        name="image"
        value={imageUrl}
        placeholder={currImageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <label htmlFor="address">Address:</label>
      <input
        name="address"
        value={address}
        placeholder={currAddress}
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="description">About:</label>
      <input
        name="description"
        value={description}
        placeholder={currDescription}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateCampus;
