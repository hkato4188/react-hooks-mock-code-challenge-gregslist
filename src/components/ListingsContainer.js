import React from "react";
import ListingCard from "./ListingCard";

//Question:  how to get the ListingsContainer to render all our ListingCards
//map function will be useful
//we can put any information we want so its flexible

function ListingsContainer({ listData }) {
  const renderedCards = listData.map((item) => {
    return (
      <ListingCard
        key={item.id}
        id={item.id}
        description={item.description}
        location={item.location}
        image={item.image}
      />
    );
  });
  return (
    <main>
      <ul className="cards">{renderedCards}</ul>
    </main>
  );
}

export default ListingsContainer;
