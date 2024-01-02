import React from "react";
import style from "./navbar.style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <div className={style.container}>
      <div className={style.logo}>Vishal Mart</div>
      <div className={style.cart}>
        <span>{products.length}</span>
        <button onClick={goToCart}>cart</button>
      </div>
    </div>
  );
};

export default Navbar;
