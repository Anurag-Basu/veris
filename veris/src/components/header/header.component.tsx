import { Dropdown, MenuProps } from "antd";
import "./header.component.scss";
import { DownOutlined } from "@ant-design/icons";
import { Breadcrumbs } from "../../common";

const Header = () => {
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
  return (
    <div className="flex items-center justify-between p-4 header-container">
      <Breadcrumbs />
      <div className="flex flex-col pl-4 location-container">
        <span className="text-gray-400 text-[12px]">Your location</span>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            Digicred HQ, Gurugram <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
