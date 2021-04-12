import React from "react";
import Link from "next/link";

import { CharacterGrid } from "../common/Grid";

const PopularCharacters = ({ characters }) => {
  return (
    <section>
      <div className="heading-cat">
        <h3 className="side-heading">Popular Characters</h3>
        <Link href="/explore">
          <a>View All &gt;&gt;&gt;</a>
        </Link>
      </div>
      <CharacterGrid
        type="story"
        characters={characters}
        gutter={"16px"}
        columnsCountBreakPoints={{
          1600: 6,
          1200: 4,
          900: 4,
          750: 2,
          600: 2,
          350: 1,
        }}
      />
    </section>
  );
};

export default PopularCharacters;
