import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ list, onDelete }) {
  const renderedListItems = list.map((item) => {
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
  });

  return (
    <main>
      <ul className="cards">{renderedListItems}</ul>
    </main>
  );
}

export default ListingsContainer;
