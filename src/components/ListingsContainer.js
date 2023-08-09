import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ list, onDelete, search, handleSort }) {
  const renderedListItems = list.map((item) => {
    if (
      search === "" ||
      item.description.toLowerCase().includes(search.toLowerCase())
    ) {
      return (
        <ListingCard
          key={item.id}
          id={item.id}
          description={item.description}
          image={item.image}
          location={item.location}
          onDelete={onDelete}
        />
      );
    }
  });

  return (
    <main>
      <div
        style={{
          margin: "auto",
          width: "50%",

          padding: "10px",
        }}
      >
        <button
          onClick={handleSort}
          style={{
            background: "lavender",
            border: "2px solid black",
            margin: "auto",
            width: "50%",
          }}
          className="emoji-button"
        >
          Sort
        </button>
      </div>
      <ul className="cards">{renderedListItems}</ul>
    </main>
  );
}

export default ListingsContainer;
