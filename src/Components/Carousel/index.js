import React from "react";
import Carousel from "react-bootstrap/Carousel";
export const CarouselComp = () => {
  const images = [
    {
      img: "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      text: "First slide label",
    },
    {
      img: "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      text: "Second slide label",
    },
    {
      img: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      text: "Third slide label",
    },
    {
      img: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      text: "Fourth slide label",
    },
    {
      img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      text: "Fiveth slide label",
    },
  ];
  return (
    <>
      <Carousel interval={1000}>
        {images.map((item) => {
          return (
            <Carousel.Item>
              <img src={item.img} />
              <Carousel.Caption>
                <h3>{item.text}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};
