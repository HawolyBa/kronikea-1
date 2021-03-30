import React from "react";
import { Pagination as Paginate, Divider } from "antd";

import { CharacterGrid, LocationGrid, StoriesGrid, UserGrid } from "./Grid";

const Pagination = ({
  data,
  xs,
  sm,
  lg,
  xl,
  md,
  type,
  gutter,
  columnsCountBreakPoints,
  itemType,
}) => {
  const [pagination, setPagination] = React.useState({
    currentPage: 1,
    datasPerPage: 12,
  });
  const { currentPage, datasPerPage } = pagination;
  const indexOfLastData = currentPage * datasPerPage;
  const indexOfFirstData = indexOfLastData - datasPerPage;

  React.useState(() => {}, [data]);

  const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

  const handleClick = (e) => {
    window.scrollTo(0, 0);
    setPagination({ ...pagination, currentPage: Number(e) });
  };

  const renderDatas =
    itemType === "stories" ? (
      <StoriesGrid
        gutter={gutter}
        type={type}
        stories={currentDatas}
        columnsCountBreakPoints={columnsCountBreakPoints}
      />
    ) : itemType === "characters" ? (
      <CharacterGrid
        columnsCountBreakPoints={columnsCountBreakPoints}
        gutter={gutter}
        type={type}
        characters={currentDatas}
      />
    ) : itemType === "locations" ? (
      <LocationGrid
        locations={currentDatas}
        gutter={gutter}
        type={type}
        columnsCountBreakPoints={columnsCountBreakPoints}
      />
    ) : itemType === "followers" ? (
      <UserGrid
        gutter={gutter}
        type={type}
        xs={xs}
        sm={sm}
        lg={lg}
        md={md}
        users={currentDatas}
      />
    ) : null;

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / datasPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <React.Fragment>
      {renderDatas}
      <Divider />
      <Paginate
        size="small"
        showQuickJumper
        hideOnSinglePage
        onChange={handleClick}
        total={data.length}
        pageSize={datasPerPage}
        showTotal={(total) => `Total ${total} items`}
      />
    </React.Fragment>
  );
};

export default Pagination;
