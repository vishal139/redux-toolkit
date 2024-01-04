import React from "react";
import style from "./Product.style.module.css";

import { addProduct } from "../../store/CartSlice";

import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const { description, image, price, title, id } = product;

  const addProductItem = () => {
    console.log('this is the product', product)
    dispatch(addProduct(product));
  }

  return (
    <div className={style.card}>
      <p className={style.tilteText}>{title}</p>
      <div className={style.imageContainer}>
        <img src={image} alt="productimage" className={style.productImage} />
      </div>
      <p className={style.text}>{description}</p>
      <p className={style.price}>${price}</p>
      <button className={style.btn} onClick={addProductItem}>add</button>
    </div>
  );
};

export default ProductItem;
