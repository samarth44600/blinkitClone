import React from "react";
import styles from "./Navbar.module.scss";
import { Icon } from "@iconify/react";
// import Logo from "src/assets/Logo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {};

const Navbar = (props: Props) => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const onCartClick = () => {
    console.log(cart);
  };
  return (
    <div className={styles.navBarDiv}>
      {/* <Logo /> */}
      <h1>BlinkIt</h1>

      <div className={styles.addressTime}>
        <strong>Delivery in 19 minutes</strong>
        <div className={styles.fullAddress}>
          <p>Khyber Pass, Civil Lines, Delhi</p>
        </div>
      </div>
      <div className={styles.inputArea}>
        <Icon className={styles.searchIcon} icon="bx:search" />
        <input placeholder="Search for Products" />
      </div>
      <div className={styles.buttons}>
        <div>
          <button className={styles.loginButton}>Login</button>
        </div>
        <div className={styles.cartButtonDiv}>
          <button onClick={onCartClick} className={styles.cartButton}>
            <Icon icon="eva:shopping-cart-outline" />
            My Cart
          </button>
          {cart.length !== 0 ? (
            <span>{cart.length}</span>
          ) : (
            <span style={{ display: "none" }}> </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
