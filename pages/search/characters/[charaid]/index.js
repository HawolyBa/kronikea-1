import React from "react";

import { CharacterGrid } from "../../../../components/common/Grid";

const CharacterSearch = () => {
  return (
    <div className="search-page">
      <h2 className="side-heading">Search results for: history</h2>
      <CharacterGrid />
    </div>
  );
};

export default CharacterSearch;
