import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ rest }) => {
  const navigate = useNavigate();

  const handleSinglePage = (restaurant) => {
    localStorage.setItem("restaurant", JSON.stringify(restaurant));
    navigate("/singlerestaurant");
  };

  return (
    <div
      className="flex xl:flex-col md:flex-col"
      onClick={() => handleSinglePage(rest)}
    >
      <div className="rounded-2xl flex-1 p-2">
        <img
          className="rounded-3xl w-full h-full object-cover"
          src={rest.images[0].url}
          alt=""
        />
      </div>
      <div className="flex-1 ml-3">
        <div className="">
          <h3 className="text-lg font-bold">{rest.restaurant_name}</h3>
          <p className="text-gray-400 mt-1">cakes, Pastry, Pastas</p>
          {rest.location && (
            <p className="text-gray-400">
              {rest.location?.location_locality},{rest.location?.city_name}
            </p>
          )}
          <div className="flex  items-center mt-1">
            <CiDiscount1 style={{ color: "#d39171" }} className="mr-1 " />
            <p className="text-[#d39171]">4 Offers trending</p>
          </div>
        </div>
        <div className="mt-3 flex justify-between gap-5 p-2">
          <div className="">
            <div className="font-bold">4.5</div>
            <p className="text-gray-400 ">Popularity</p>
          </div>
          <div className="p-1">
            <p className="font-bold">$200</p>
            <p className="text-gray-400 truncate">Cost for two</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
