import React, { useState } from "react";

function ListingCard(props) {
  const [isActive, setIsActive] = useState(false);

  function handleStarClick() {
    setIsActive(!isActive);
  }

  function onDelete(event) {
    const deleteId = event.target.value;
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={props.image} alt={props.description} />
      </div>
      <div className="details">
        {isActive ? (
          <button
            onClick={handleStarClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleStarClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{props.description}</strong>
        <span> · {props.location}</span>
        <button
          value={props.id}
          onClick={onDelete}
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;

//I can remove a listing from the page
//  => Delete request from fetch
//by clicking the trash can icon.
//   => onClick Event listener on trash can
//This change should be persisted in the backend.
//    => update the database
