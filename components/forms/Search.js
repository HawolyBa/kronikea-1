import React from "react";

const Search = () => {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search..." />
      <div className="search__icon">
        <ion-icon name="search"></ion-icon>
      </div>
      <select>
        <option value="stories">Stories</option>
        <option value="characters">Characters</option>
        <option value="users">Users</option>
      </select>
    </div>
  );
};

export default Search;
