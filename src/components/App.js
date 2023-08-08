import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [list, setList] = useState([]);
  const baseUrl = `http://localhost:6001/listings`;

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((items) => setList(items));
  }, []);

  function handleDelete(id) {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        console.log("deleted!");
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
      });
  }

  function handleSearch(search) {
    const filteredList = list.filter(
      (i) =>
        search === "All" ||
        i.description.toLowerCase().includes(search.toLowerCase())
    );
    setList(filteredList);
  }

  function handleFormSubmit(formData) {
    fetch(`${baseUrl}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        setList([...list, data]);
      });
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} addNewListing={handleFormSubmit} />
      <ListingsContainer list={list} onDelete={handleDelete} />
    </div>
  );
}

export default App;
