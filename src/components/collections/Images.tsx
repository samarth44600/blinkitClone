import React from "react";
import style from "./Collection.module.scss";
type Props = { data: { src: string } };

function Images({ data }: Props) {
  return (
    <div className={style.images}>
      <img src={data.src} alt="Collectibles" />
    </div>
  );
}

export default Images;
