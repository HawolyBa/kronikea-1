import React from "react";
import { Divider } from "antd";

import Pagination from "../common/Pagination";
import SortInput from "./SortInput";

const Characters = ({ characters, type, context }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(characters);
  }, [characters]);

  const options = [
    { name: "Date (ascending)", value: "date-asc" },
    { name: "Date (descending)", value: "date-desc" },
    { name: "Firstname (ascending)", value: "firstname-asc" },
    { name: "Firstname (descending)", value: "firstname-desc" },
    { name: "Lastname (ascending)", value: "lastname-asc" },
    { name: "Lastname (descending)", value: "lastname-desc" },
  ];

  return (
    <div className="profile-characters">
      <SortInput
        type="characters"
        itemData={characters}
        title={type !== "favorites" ? "Characters" : "Favorite Characters"}
        setData={setData}
        options={options}
        context={context}
      />
      <Divider />
      <Pagination
        data={data}
        type={type}
        gutter={"16px"}
        itemType="characters"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4, 1600: 6 }}
      />
    </div>
  );
};

export default Characters;
