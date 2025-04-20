"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacture";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar-item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
