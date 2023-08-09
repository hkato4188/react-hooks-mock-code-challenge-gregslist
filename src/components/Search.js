import React from "react";

function Search({ onSearch, search, setSearch }) {
  function handleSearchSubmit(e) {
    e.preventDefault();
    setSearch(e.target.children[0].value);
  }

  //=> originally called onSearch in event handler
  return (
    <form className="searchbar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        //For search functionality to comply with cc deliverable
        //value={search}
        //onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
