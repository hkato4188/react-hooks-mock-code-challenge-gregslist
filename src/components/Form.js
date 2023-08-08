import React, { useState } from "react";

function Form({ addNewListing }) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: "",
  });

  const { description, image, location } = formData;

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewListing(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label> Description:</label>
      <input
        type="text"
        name="description"
        onChange={handleFormChange}
        value={description}
      />

      <label> Image URL:</label>
      <input
        type="text"
        name="image"
        onChange={handleFormChange}
        value={image}
      />

      <label> Location:</label>
      <input
        type="text"
        name="location"
        onChange={handleFormChange}
        value={location}
      />

      <button type="submit"> Submit</button>
    </form>
  );
}

export default Form;
