import React from 'react';
import style from './Cart.style.module.css'

import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {

  const cartData = useSelector((state) => state.cart);
  return (
    <div className={style.cartContainer}>
      <p className={style.cart}>Your Cart</p>
      {cartData?.length > 0 &&
        cartData.map((item) => {
          return (
            <CartItem item={ item} />
          );
        })}
    </div>
  );
}

export default Cart