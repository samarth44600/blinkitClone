import style from "./ItemComponent.module.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "src/components/redux/cartSlice";
import { RootState } from "../redux/store";

type Props = {
  imageSrc: string;
  altText: string;
  [key: string]: any;
  name: string;
  quantity: string;
  beforePrice: string | number;
  afterPrice: string | number;
  id: number;
};

const ItemComponent = ({
  imageSrc,
  altText,
  name,
  quantity,
  beforePrice,
  afterPrice,
  id,
  ...props
}: Props) => {
  const { cart }: { cart: number[] } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  const isAlreadyAdded = cart.includes(id);

  const handleClick = () => {
    dispatch(addToCart(id));
  };

  return (
    <div className={style.mainItemDiv}>
      <img src={imageSrc} alt={altText} {...props} />

      <div className={style.bottomDiv}>
        <div className={style.nameQuantity}>
          <p className={style.name}>{name}</p>
          <p className={style.quantity}>{quantity}</p>
        </div>

        <div className={style.buttonPrice}>
          <div className={style.prices}>
            <span className={style.after}>{afterPrice}</span>
            <span className={style.before}>{beforePrice}</span>
          </div>
          <div className={style.button}>
            <button onClick={handleClick}>
              {isAlreadyAdded ? "Added" : "+Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
