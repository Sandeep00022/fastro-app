import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MyCarousel = () => {
  // Dummy image URLs
  const images = [
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
  ];

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
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
          items: 3,
          slidesToSlide: 3,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index}`} />
      ))}
    </Carousel>
  );
};

export default MyCarousel;
