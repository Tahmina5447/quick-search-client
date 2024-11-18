import { Table } from "antd";
import React from "react";

const CustomTable = ({ tableData, columns, scroll, }) => {
  const [start, setStart] = React.useState(1);
  const [end, setend] = React.useState(10);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePaginationChange = (page, pageSize) => {
    scrollTop();
    setStart((pre) => (page === 1 ? 1 : page * 10 - 9));
    setend((pre) =>
      page * 10 > tableData?.length ? tableData?.length : page * 10
    );
  };
  const paginationOptions = {
    onChange: handlePaginationChange,
  };

  return (
    <div className="lg:relative text-secondary text-base w-full">
      <div className="w-full">
        <Table
          columns={columns}
          className="admin__Table"
          dataSource={tableData}
          pagination={false}
          scroll={scroll}
        />
      </div>
    </div>
  );
};

export default CustomTable;
