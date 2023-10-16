import { Menu } from "antd";
import "./sidebar.component.scss";
import {
  Book,
  DownloadCloud,
  BarChart2,
  Archive,
  Settings,
  Briefcase,
  Eye,
  Globe,
} from "react-feather"; // Import React Feather icons

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen p-6 sidebar-parent-container">
      <div className="">
        <img
          src="https://www.getveris.com/wp-content/uploads/2021/09/new-logo-2021.png"
          alt="veris logo"
          className="pl-2 mb-8 logo-img"
        />
        <Menu mode="inline" theme="light">
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
      </div>
      <div className="bottom-menu">
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

        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
            alt="User Image"
            className="h-12 pl-2 w-15"
          />
          <div className="p-4 ml-4">
            <p className="text-sm text-gray-500">Welcome,</p>
            <p className="text-base font-bold">Chun Li Harris</p>
            <p className="text-sm text-gray-500 ">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
