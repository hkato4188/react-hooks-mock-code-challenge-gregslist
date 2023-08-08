import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((listingItems) => {
        setListings(listingItems);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <ListingsContainer listData={listings} />
    </div>
  );
}

export default App;
