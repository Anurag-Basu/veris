import React from "react";
import { CardProps } from "../../types";
import { Check, Mail, Phone, X } from "react-feather";
import "./card.component.scss";

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="flex card-container flex-col text-[14px] rounded-lg my-6 p-4 bg-white">
      <div className="flex flex-row">
        <div className="flex flex-col  w-[200px]">
          <img src={card.imageUrl} alt="" className="w-[200px] rounded h-100" />
          <div className="flex flex-col ml-4">
            <h3 className="text-sm font-bold">{card.name}</h3>
            <p className="text-sm">{card.info}</p>
          </div>
        </div>

        <div className="p-4 ml-4 bg-gray-100 ">
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-col">
              <h4 className="text-sm font-bold">Host name</h4>
              <p className="text-sm">{card.hostName}</p>
              <h4 className="text-sm font-bold">Time</h4>
              <p className="text-sm">{card.time}</p>
            </div>
            <div className="flex flex-col ml-4">
              <h4 className="text-sm font-bold">Web check-in</h4>
              {card.webCheckIn && <Check className="text-green-500" />}
              {!card.webCheckIn && <X className="text-black" />}
              <h4 className="text-sm font-bold">Duration</h4>
              <p className="text-sm">{card.duration}</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-row">
            <Phone className="mr-2 text-sm" />
            <p className="text-sm">{card.number}</p>
          </div>
          <div className="flex flex-row">
            <Mail className="mr-2 text-sm" />
            <p className="text-sm">{card.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
