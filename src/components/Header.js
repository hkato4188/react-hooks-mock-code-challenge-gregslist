import React from "react";
import Search from "./Search";
import Form from "./Form";

function Header({ onSearch, addNewListing }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
      <Form addNewListing={addNewListing} />
    </header>
  );
}

export default Header;
