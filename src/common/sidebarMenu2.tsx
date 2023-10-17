import { Menu } from "antd";
import {
  Archive,
  BarChart2,
  Book,
  DownloadCloud,
  Settings,
} from "react-feather";

const SidebarMenu2 = () => {
  return (
    <Menu theme="light" mode="inline">
      <Menu.Item key="1" icon={<Book />}>
        Member Book
      </Menu.Item>
      <Menu.Item key="2" icon={<DownloadCloud />}>
        Download Center
      </Menu.Item>
      <Menu.Item key="3" icon={<BarChart2 />}>
        Quick Reports
      </Menu.Item>
      <Menu.Item key="4" icon={<Archive />}>
        Audit Logs
      </Menu.Item>
      <Menu.Item key="5" icon={<Settings />}>
        Settings
      </Menu.Item>
    </Menu>
  );
};

export default SidebarMenu2;
