import { Button, Drawer, Dropdown, MenuProps } from "antd";
import "./header.component.scss";
import { DownOutlined } from "@ant-design/icons";
import { Breadcrumbs, SidebarMenu1, SidebarMenu2 } from "../../common";
import { useState } from "react";
import { Menu, X } from "react-feather";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between p-4 header-container">
      <div className="flex items-center ">
        <Button
          className="mr-4 menu-icon"
          onClick={handleDrawer}
          icon={<Menu />}
        />
        <Breadcrumbs />
      </div>
      <div className="flex flex-col pl-4 location-container">
        <span className="text-gray-400 text-[12px]">Your location</span>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            Digicred HQ, Gurugram <DownOutlined />
          </a>
        </Dropdown>
      </div>

      <Drawer
        title="Veris"
        placement="left"
        closable={false}
        onClose={handleDrawer}
        open={open}
        extra={<Button type="text" onClick={handleDrawer} icon={<X />} />}
      >
        <div className="flex flex-col justify-between">
          <SidebarMenu1 />
          <SidebarMenu2 />
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
