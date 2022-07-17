import React from "react";
import style from "./Body.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Collection from "../collections/Collection";
import Promotions from "../Promotions/Promotions";
// import ItemComponent from "../ItemComponent/ItemComponent";
import BandD from "../SliderItems/BandD/BandD";
import Chemist from "../SliderItems/Chemist/Chemist";
import FandD from "../SliderItems/FandD/FandD";

const first = require("src/assets/first.png");
const second = require("src/assets/second.png");
const sliderImg = require("src/assets/sliderImg.png");
const sliderImg1 = require("src/assets/babyProduct.png");

type Props = {};

const Body = (props: Props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images: any[] = [
    sliderImg,
    sliderImg1,
    sliderImg,
    sliderImg1,
    sliderImg,
    sliderImg1,
    sliderImg,
    sliderImg1,
    sliderImg,
    sliderImg1,
    sliderImg,
    sliderImg1,
  ];
  return (
    <div>
      <div className={style.bodyDiv}>
        <div className={style.widget}>
          <img src={first} alt="product" />
        </div>
        <div className={style.widget}>
          <img src={second} alt="product" />
        </div>
        <Carousel
          ssr
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .3s ease"
          transitionDuration={300}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass={style.imageSlider}
          className={style.imageSlider}
        >
          {images.slice(0, 5).map((data) => {
            return (
              <div>
                <img
                  style={{ padding: "1rem", width: "350px" }}
                  alt="slider"
                  src={data}
                />
              </div>
            );
          })}
        </Carousel>

        <Collection />
        <Promotions />
        {/* 
        <BandD />

        <Chemist /> */}

        <FandD />
      </div>
    </div>
  );
};

export default Body;
