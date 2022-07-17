import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./Carousel.module.scss";

type Props = { children: React.ReactNode; [key: string]: any };

const Carousels = ({ children, ...props }: Props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  return (
    <div>
      <Carousel
        ssr
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={false}
        keyBoardControl={true}
        customTransition="all .3s ease"
        transitionDuration={300}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // itemClass={style.imageClass}
        className={style.sliderClass}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default Carousels;
