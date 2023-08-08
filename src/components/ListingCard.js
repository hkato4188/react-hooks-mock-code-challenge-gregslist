import React, { useState } from "react";

function ListingCard({ id, description, image, location, onDelete }) {
  const [isFavorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={`${description}`} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            onClick={() => setFavorite(!isFavorite)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(!isFavorite)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDelete(id)} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
