import React from "react";
import ItemComponent from "src/components/ItemComponent/ItemComponent";
import Carousels from "../Carousels";
import style from "../Carousel.module.scss";

const image1 = require("src/assets/onion.png");
const image2 = require("src/assets/mango.png");

type Props = {};

const BandD = (props: Props) => {
  const data: any[] = [
    {
      src: image1,
      altMessage: "This is onion",
      name: "Onion",
      quantity: "1kg",
      beforePrice: "150",
      afterPrice: "100",
    },
    {
      src: image2,
      altMessage: "This is mango",
      name: "Mango",
      quantity: "1kg",
      beforePrice: "450",
      afterPrice: "400",
    },
    {
      src: image1,
      altMessage: "This is onion",
      name: "Onion",
      quantity: "1kg",
      beforePrice: "150",
      afterPrice: "100",
    },
    {
      src: image2,
      altMessage: "This is mango",
      name: "Mango",
      quantity: "1kg",
      beforePrice: "450",
      afterPrice: "400",
    },
    {
      src: image1,
      altMessage: "This is onion",
      name: "Onion",
      quantity: "1kg",
      beforePrice: "150",
      afterPrice: "100",
    },
    {
      src: image2,
      altMessage: "This is mango",
      name: "Mango",
      quantity: "1kg",
      beforePrice: "450",
      afterPrice: "400",
    },
    {
      src: image1,
      altMessage: "This is onion",
      name: "Onion",
      quantity: "1kg",
      beforePrice: "150",
      afterPrice: "100",
    },
    {
      src: image2,
      altMessage: "This is mango",
      name: "Mango",
      quantity: "1kg",
      beforePrice: "450",
      afterPrice: "400",
    },
    {
      src: image1,
      altMessage: "This is onion",
      name: "Onion",
      quantity: "1kg",
      beforePrice: "150",
      afterPrice: "100",
    },
    {
      src: image2,
      altMessage: "This is mango",
      name: "Mango",
      quantity: "1kg",
      beforePrice: "450",
      afterPrice: "400",
    },
  ];
  return (
    <div className={style.mainDiv}>
      <h3 style={{ padding: "1.5rem" }}>BandD</h3>
      <Carousels
        children={data.map((data, index) => {
          return (
            <ItemComponent
              id={index}
              imageSrc={data.src}
              altText={data.altMessage}
              name={data.name}
              quantity={data.quantity}
              beforePrice={data.beforePrice}
              afterPrice={data.afterPrice}
            />
          );
        })}
      />
    </div>
  );
};

export default BandD;
