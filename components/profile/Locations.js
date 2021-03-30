import React from "react";
import { Divider } from "antd";

import Pagination from "../common/Pagination";
import SortInput from "./SortInput";

const Locations = ({ locations, type, context }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(locations);
  }, [locations]);

  const options = [
    { name: "Date (ascending)", value: "date-asc" },
    { name: "Date (descending)", value: "date-desc" },
    { name: "Name (ascending)", value: "name-asc" },
    { name: "Name (descending)", value: "name-desc" },
  ];

  return (
    <div className="profile-characters">
      <SortInput
        type="locations"
        itemData={locations}
        title="Locations"
        setData={setData}
        options={options}
        context={context}
      />
      <Divider />
      <Pagination
        data={data}
        type={type}
        gutter={"16px"}
        itemType="locations"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4, 1600: 6 }}
      />
      {/* <LocationGrid
        locations={locations}
        xxl={4}
        sm={12}
        sx={12}
        md={8}
        xl={6}
        lg={8}
        gutter={[16, 16]}
        type={type}
      /> */}
    </div>
  );
};

export default Locations;
