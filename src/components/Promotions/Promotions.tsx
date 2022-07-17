import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./Promotions.module.scss";

const poster1 = require("src/assets/nestle.png");
const poster2 = require("src/assets/surfExcel.png");
const poster3 = require("src/assets/kellogs.png");

type Props = {};

const Promotions = (props: Props) => {
  const posters: any[] = [poster1, poster2, poster3];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={style.promotionDiv}>
      <Carousel
        ssr
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="all 1s ease"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {posters.map((data) => {
          return (
            <div>
              <img
                style={{
                  padding: "0rem 15rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                alt="slider"
                src={data}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Promotions;
