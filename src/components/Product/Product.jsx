import React from "react";
import style from "./Product.style.module.css";

import { addProduct } from "../../store/CartSlice";

import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const { catagory, description, image, price, title, id } = product;

  const addProductItem = () => {
    console.log('this is the product', product)
    dispatch(addProduct(product));
  }

  return (
    <div className={style.card}>
      <p>{title}</p>
      <div className={style.imageContainer}>
        <img src={image} alt="productimage" className={style.productImage} />
      </div>
      <p>{catagory}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={addProductItem}>add</button>
    </div>
  );
};

export default ProductItem;
