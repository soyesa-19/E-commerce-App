import React, { useState } from "react";
import { SmileOutlined, FilterOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";

const Filter = ({ selectedMenuItem, handleMenuClick, items }) => {
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      placement="bottomLeft"
      arrow
    >
      <Button className=" hover:border-yellow text-brandDark hover:bg-slate-700 flex justify-between items-center gap-4">
        {selectedMenuItem} <FilterOutlined />
      </Button>
    </Dropdown>
  );
};
export default Filter;
