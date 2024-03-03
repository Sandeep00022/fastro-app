import React from "react";
import { FaWifi } from "react-icons/fa";
import { IoBatteryFullOutline } from "react-icons/io5";
import { TbAntennaBars5 } from "react-icons/tb";

const Icons = () => {
  return (
    <div className="flex gap-1">
      <TbAntennaBars5 />
      <FaWifi />
      <IoBatteryFullOutline />
    </div>
  );
};

export default Icons;
