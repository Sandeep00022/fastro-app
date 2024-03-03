import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const MyCarousel = ({ allRestaurants }) => {
  console.log(allRestaurants);
  // Dummy image URLs
  const images = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ];

  const colors = [
    "bg-yellow-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-pink-100",
  ];

  const navigate = useNavigate();

  const handleSinglePage = (restaurant) => {
    localStorage.setItem("restaurant", JSON.stringify(restaurant));
    navigate("/singlerestaurant");
  };

  return (
    <Carousel
      removeArrowOnDeviceType={["tablet", "mobile"]}
      additionalTransfrom={0}
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 2,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {allRestaurants.map((data, index) => (
        <div
          onClick={() => handleSinglePage(data)}
          key={data.restaurant_uuid}
          className="px-4 py-3 "
        >
          {" "}
          {/* Added padding for spacing */}
          <div
            key={index}
            className={` shadow-lg rounded-2xl ${
              colors[index % colors.length]
            }`}
          >
            <img
              className="rounded-2xl rounded-b"
              src={data.images[0].url}
              alt={`Slide ${index}`}
            />
            <div className="p-2 whitespace-nowrap ">
              <h3 className="text-cl font-semibold truncate">
                {data.restaurant_name}
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                {data.location?.location_locality},
              </p>
              <p className="text-sm font-semibold text-gray-400">
                {data.location?.city_name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
