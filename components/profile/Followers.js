import React from "react";
import { Divider } from "antd";

import Pagination from "../common/Pagination";
import SortInput from "./SortInput";

const Followers = ({ md, sm, xs, lg, items, title, type }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(items);
  }, [items]);

  const options = [
    { name: "Date (ascending)", value: "date-asc" },
    { name: "Date (descending)", value: "date-desc" },
    { name: "Username (ascending)", value: "username-asc" },
    { name: "Username (descending)", value: "username-desc" },
  ];

  return (
    <div className="followers">
      <SortInput
        type="followers"
        itemData={items}
        title={title}
        setData={setData}
        options={options}
      />
      <Divider />
      <Pagination
        data={data}
        gutter={[20, 30]}
        itemType="followers"
        md={md}
        sm={sm}
        xs={xs}
        lg={lg}
        type={type}
      />
    </div>
  );
};

export default Followers;
