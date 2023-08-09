import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [sortedList, setSortedList] = useState(false);
  const baseUrl = `http://localhost:6001/listings`;

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((items) => setList(items));
  }, []);

  function handleDelete(id) {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  }

  function handleSearch(search) {
    setList((prev) =>
      prev.filter(
        (p) =>
          search === "" ||
          p.description.toLowerCase().includes(search.toLowerCase())
      )
    );
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

  function customSort(arr, filter) {
    console.log("sorting");
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j][`${filter}`] > arr[j + 1][`${filter}`]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
    return arr;
  }

  function handleSort() {
    const sortByDescription = customSort(list, "description");
    const sortByLocation = customSort(sortByDescription, "location");
    setSortedList(!sortedList);
    setList(sortByLocation);
  }

  return (
    <div className="app">
      <Header
        onSearch={handleSearch}
        addNewListing={handleFormSubmit}
        search={search}
        setSearch={setSearch}
      />
      <ListingsContainer
        handleSort={handleSort}
        search={search}
        list={list}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
