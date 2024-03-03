import React, { useState } from "react";
import CurrentTime from "../components/CurrentTime";
import Icons from "../components/Icons";
import { CiDiscount1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

const SingleRestaurant = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("restaurant" || {}))
  );

  console.log(data);
  return (
    <div className="p-4">
      <div className=" relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between ">
          <div className="flex justify-between p-4">
            <div className="">
              <CurrentTime />
            </div>
            <div className="">
              <Icons />
            </div>
          </div>
          {/* Add additional content here */}
        </div>
        <img className="w-full h-auto" src={data?.images[0].url} alt="" />
      </div>
      <div className="flex justify-between rounded-t-3xl mt-[-70px]  p-4 bg-white relative z-20">
        <div className="">
          <p className="text-lg font-semibold">{data?.restaurant_name}</p>
          <p className="text-gray-600">
            {data.location?.location_locality}, {data.location?.city_name}
          </p>
          <div className="flex  items-center mt-1">
            <CiDiscount1 style={{ color: "#d39171" }} className="mr-1 " />
            <p className="text-[#d39171]">4 Offers trending</p>
          </div>
        </div>
        <div className="flex gap-1 justify-top items-center">
          <CiStar size="25" />
          <p className="text-gray-500">4.5</p>
        </div>
      </div>
      <div className="mt-9 p-5">
        <p >
          Our delicate Vanilla cake swirled with chocolate and filled with macha
          chocolate chip cream and a layer of dark chocolate ganache
        </p>
      </div>
    </div>
  );
};

export default SingleRestaurant;
