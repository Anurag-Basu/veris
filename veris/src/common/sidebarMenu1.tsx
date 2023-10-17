import { Menu } from "antd";
import { Briefcase, DownloadCloud, Eye, Globe } from "react-feather";

const SidebarMenu1 = () => {
  return (
    <Menu mode="inline" theme="light" selectedKeys={["2"]}>
      <Menu.SubMenu key="submenu" icon={<Globe />} title=" Welcome Veris">
        <Menu.Item key="2">Visitors</Menu.Item>
        <Menu.Item key="3">Visit Logs</Menu.Item>
        <Menu.Item key="4">Insights</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="5" icon={<DownloadCloud />}>
        Bookings
      </Menu.Item>
      <Menu.Item key="6" icon={<Briefcase />}>
        Work
      </Menu.Item>
      <Menu.Item key="7" icon={<Eye />}>
        Veris Sight
      </Menu.Item>
    </Menu>
  );
};

export default SidebarMenu1;
