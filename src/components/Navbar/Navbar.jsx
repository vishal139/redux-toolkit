import React, { useEffect } from "react";
import style from "./navbar.style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };
  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (cart && cart?.length === 0)
    {
      goToHome()
      }
  
},[cart])

  return (
    <div className={style.container}>
      <div className={style.logo} onClick={goToHome}>
        Vishal Mart
      </div>
      <div className={style.cart}>
        <span className={style.itemCount}> item added : {cart?.length}</span>
        <button onClick={goToCart} className={style.cartBtn}>
          cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
