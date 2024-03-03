import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiUserLocationLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { CgShapeCircle, CgShapeTriangle, CgShapeSquare } from "react-icons/cg";
import { Button, Carousel } from "flowbite-react";
import MyCarousel from "../components/MyCarousel";

const Restaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const getResturant = async () => {
    try {
      await axios
        .get(`https://staging.fastor.in/v1/m/restaurant?city_id=${118}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResturant();
  }, []);

  return (
    <div className=" border border-red-500 flex flex-col justify-center items-center">
      <div className="justify-center bg-bottom-2 border-b-2 border-gray-300 shadow-lg p-4 rounded-sm w-full">
        <div className="  justify-end flex gap-1 ">
          <div className="  flex gap-1 self-end">
            <CgShapeSquare />
            <CgShapeCircle />

            <CgShapeTriangle />
          </div>
        </div>
        <div className="">
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold text-gray-400">Pre Order From</h3>
            <RiUserLocationLine />
          </div>
          <div className="text-xl font-bold ">Connaught Place</div>
        </div>
      </div>
    <div className="border border-red-500 flex justify-between items-center w-full mt-[60px] p-5 ">
  <div className="w-full mr-3">
    <h2 className="text-3xl font-bold text-gray-400">Sandeep</h2>
    <div className="text-2xl font-bold">Let's explore this evening</div>
  </div>
  <div className="flex items-center gap-6"> {/* Adjusted */}
    <div>
      <Button gradientDuoTone={"pinkToOrange"} className="rounded-3xl">
        <CiDiscount1 size={50} />
      </Button>
      <p className="text-lg text-center font-semibold text-gray-400">
        Offers
      </p>
    </div>
    <div>
      <Button gradientDuoTone={"purpleToBlue"} className="rounded-3xl">
        <LuWallet size={50} />
      </Button>
      <p className="text-lg text-center font-semibold text-gray-400">
        Wallet
      </p>
    </div>
  </div>
</div>
      <div className="w-full">
        <div className="p-5 flex  justify-between items-center">
          <h2 className="text-2xl font-bold">Your taste</h2>
          <div className="flex gap-2">
            <p className=" text-xl font-semibold text-gray-400">See all</p>
            <Button
              color="white"
              className="flex items-center justify-center bg-gray-200 text-gray-800 rounded-full w-6 h-6 text-xl"
            >
              {" "}
              {">"}
            </Button>
          </div>
        </div>
        <MyCarousel/>
      </div>
    </div>
  );
};

export default Restaurant;
