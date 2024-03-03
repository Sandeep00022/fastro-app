import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ allRestaurants }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Set center padding to 0px
  };

  const navigate = useNavigate();

  const handleSinglePage = (restaurant) => {
    localStorage.setItem("restaurant", JSON.stringify(restaurant));
    navigate("/singlerestaurant");
  };

  return (
    <Slider {...settings}>
      {allRestaurants.map((data, index) => (
        <div
          onClick={()=>handleSinglePage(data)}
          key={index}
          className="px-4 w-full relative"
        >
          {" "}
          {/* Added padding for spacing */}
          <div
            key={data.restaurant_uuid}
            className={`  shadow-lg rounded-2xl w-full`}
          >
            <img
              className="rounded-2xl m-0 p-0 w-full"
              src={data.images[0].url}
              alt={`Slide ${index}`}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center px-4 sm:px-0">
            {" "}
            {/* Adjusted */}
            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold truncate">
              {" "}
              {/* Adjusted */}
              {data.restaurant_name}
            </h3>
            <Button className="bg-[#7a9238] rounded-none mt-2 sm:mt-4">
              VISIT NOW
            </Button>{" "}
            {/* Adjusted */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
