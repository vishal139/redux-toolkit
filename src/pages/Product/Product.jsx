import React, { useEffect, useState } from "react";
import style from "./Product.style.module.css";
import ProductItem from "../../components/Product/Product";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const productsUrl = `https://fakestoreapi.com/products`;

  const getProducts = async () => {
    const data = await axios.get(productsUrl);
    if (data) {
      console.log(data.data, 'this is the data')
      setProducts(data.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={style.container}>
      {products.length &&
        products.map((product) => {
          return (
            <>
              <div className={style.productItem} key={product.id}>
                <ProductItem product={ product} />
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Product;
