import React, { useEffect } from "react";
import style from "./CartItem.css.module.css";
import { useDispatch } from "react-redux";
import { removeProduct } from '../../store/CartSlice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  
    const { title, image, price } = item;
    
    const removeItem = () => {
        dispatch(removeProduct(item?.id))
  }
  
  return (
    <div className={style.container}>
      <div className={style.box}>
        <img className={style.picture} src={image} alt="product_img" />
        <p className={style.title}>{title}</p>
      </div>
      <div className={style.box}>
        <p className={style.title}>${price}</p>
        <button onClick={removeItem} className={style.btn}>remove</button>
      </div>
    </div>
  );
};

export default CartItem;
