import React, { useEffect, useRef, useState } from "react";
import CurrentTime from "../components/CurrentTime";
import Icons from "../components/Icons";
import { CiDiscount1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import DragDrop from "../components/DragDrop";

const SingleRestaurant = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("restaurant" || {}))
  );
  const draggableRef = useRef(null);
  const offsetX = useRef(0);
  const offsetY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = e.clientX - offsetX.current;
      const newY = e.clientY - offsetY.current;
      draggableRef.current.style.left = newX + "px";
      draggableRef.current.style.top = newY + "px";
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const newX = e.touches[0].clientX - offsetX.current;
      const newY = e.touches[0].clientY - offsetY.current;
      draggableRef.current.style.left = newX + "px";
      draggableRef.current.style.top = newY + "px";
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = draggableRef.current.getBoundingClientRect();
    offsetX.current = e.clientX - rect.left;
    offsetY.current = e.clientY - rect.top;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const rect = draggableRef.current.getBoundingClientRect();
    offsetX.current = e.touches[0].clientX - rect.left;
    offsetY.current = e.touches[0].clientY - rect.top;
  };

  console.log(data);
  return (
    <div className="p-4">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between">
          <div className="fixed top-0 left-0 w-full flex justify-between self p-4 bg-white z-10">
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
        <div
          ref={draggableRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl font-bold bg-black bg-opacity-50 p-2 rounded-md"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ cursor: "grab", userSelect: "none" }}
        >
          FASTOR7
        </div>
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
        <p>
          Our delicate Vanilla cake swirled with chocolate and filled with macha
          chocolate chip cream and a layer of dark chocolate ganache
        </p>
      </div>
    </div>
  );
};

export default SingleRestaurant;
