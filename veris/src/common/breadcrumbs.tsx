import { Breadcrumb } from "antd";

const Breadcrumbs = () => {
  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          title: "Home",
        },
        {
          title: "visitors",
          href: "",
        },
        {
          title: "Kanban view",
          href: "",
        },
      ]}
    />
  );
};

export default Breadcrumbs;
