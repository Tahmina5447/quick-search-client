import { Drawer } from "antd";
import React from "react";

const CustomDrawer = ({
 children,
  drawerVisible,
  setDrawerVisible,
  className,
  width,
}) => {
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Drawer
      open={drawerVisible}
      onClose={toggleDrawer}
      placement="left"
      className={className}
      width={width}
      footer={false}
      closable={false}
    >
      <div>{children}</div>
    </Drawer>
  );
};

export default CustomDrawer;
