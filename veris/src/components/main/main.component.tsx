import { Button } from "antd";
import { Breadcrumbs } from "../../common";
import "./main.component.scss";
import { MoreVertical, Plus } from "react-feather";
import Card from "../card/card.component";

const Main = () => {
  const cardItem = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      name: "Oludayo",
      info: "Binford Ltd.",
      hostName: "Darrell Steward",
      time: "11:00 AM",
      number: "(684) 555-0102",
      email: "dolores.chambers@example.com",
      duration: "2 Hours",
      webCheckIn: true,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      name: "Oludayo",
      info: "Binford Ltd.",
      hostName: "Darrell Steward",
      time: "11:00 AM",
      number: "(684) 555-0102",
      email: "dolores.chambers@example.com",
      duration: "2 Hours",
      webCheckIn: true,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      name: "Oludayo",
      info: "Binford Ltd.",
      hostName: "Darrell Steward",
      time: "11:00 AM",
      number: "(684) 555-0102",
      email: "dolores.chambers@example.com",
      duration: "2 Hours",
      webCheckIn: true,
    },
  ];
  console.log(cardItem);
  return (
    <div className="main-content-container p-[24px]">
      <div className="flex justify-between ">
        <div className="">
          <h2 className="">Visitor</h2>
          <Breadcrumbs />
        </div>
        <div className="btn-container">
          <Button type="primary" className="mr-[24px]" icon={<Plus />}>
            New Invite
          </Button>
          <Button type="primary" icon={<Plus />}>
            Add Visit
          </Button>
        </div>
      </div>

      <div className="relative flex pt-6 overflow-y-scroll card-container-parent ">
        <div className="">
          <div className="card-title">
            <span>Expected</span>
            <Button type="text" icon={<MoreVertical size={13} />} />
          </div>
          <div className="">
            <div className="card">
              {cardItem.map((card) => {
                return <Card card={card} />;
              })}
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="card-title">
              <span>Checked-in </span>
              <Button type="text" icon={<MoreVertical size={13} />} />
            </div>

            <div className="">
              <div className="card">
                {cardItem.slice(0, 1).map((card) => {
                  return <Card card={card} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="card-title">
              <span>Checked-out </span>
              <Button type="text" icon={<MoreVertical size={13} />} />
            </div>

            <div className="">
              <div className="card">
                {cardItem.slice(0, 2).map((card) => {
                  return <Card card={card} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <Button icon={<Plus />} />
      </div>
    </div>
  );
};

export default Main;
