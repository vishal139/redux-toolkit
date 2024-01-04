import React, { useEffect, useState } from "react";
import style from "./Product.style.module.css";
import ProductItem from "../../components/Product/Product";
import { useDispatch } from "react-redux";
import { STATUS, fetchProduct } from "../../store/ProductSlice";
import { useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const {data,status} = useSelector((state)=>state.products)
  const [products, setProducts] = useState(data);


  useEffect(() => {
    dispatch(fetchProduct())
  }, []);

  useEffect(() => {
    setProducts(data);
  },[data])

  return (
    <div className={style.container}>
      {status === STATUS.LOADING && <p>Loading....</p>}
      {products?.length &&
        products.map((product) => {
          return (
            <>
              <div key={product.id}>
                <ProductItem product={product} />
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Product;
