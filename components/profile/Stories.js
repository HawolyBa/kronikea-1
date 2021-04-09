import React from "react";
import { Divider } from "antd";

import Pagination from "../common/Pagination";
import LoadingScreen from "../hoc/LoadingScreen";
import SortInput from "./SortInput";

const Stories = ({ stories, loading, type, context }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(stories);
  }, [stories]);

  const options = [
    { name: "Date (ascending)", value: "date-asc" },
    { name: "Date (descending)", value: "date-desc" },
    { name: "Name (ascending)", value: "name-asc" },
    { name: "Name (descending)", value: "name-desc" },
  ];

  return (
    <div className="profile-stories">
      <LoadingScreen loading={loading}>
        <SortInput
          type="stories"
          itemData={stories}
          title={
            type !== "favorites"
              ? stories.length > 1
                ? "Stories"
                : "Story"
              : stories.length > 1
              ? "Favorite Stories"
              : "Favorite Story"
          }
          setData={setData}
          options={options}
          context={context}
        />
        <Divider />
        <Pagination
          data={data}
          type={type}
          gutter={"16px"}
          type={type}
          itemType="stories"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
        />
      </LoadingScreen>
    </div>
  );
};

export default Stories;
