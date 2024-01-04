import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export const STATUS = Object.freeze({
  IDLE: "IDLE",
  ERROR: "ERROR",
  LOADING: "LOADING",
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.status = STATUS.LOADING;
            
        }).addCase(fetchProduct.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.IDLE;
            
        }).addCase(fetchProduct.rejected, (state, action) => {
            state.status = STATUS.ERROR;
            
        })
    }
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

// export function fetchProduct() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const productsUrl = `https://fakestoreapi.com/products`;
//             const data = await axios.get(productsUrl);
//             if (data)
//             {
//                 dispatch(setProducts(data.data))
//                 dispatch(setStatus(STATUS.IDLE));

//             }
//         }
//         catch (err) {
//             dispatch(setStatus(STATUS.ERROR));
//         }

//     }
// }

export const fetchProduct = createAsyncThunk("fetch/product", async () => {
  try {
    const productsUrl = `https://fakestoreapi.com/products`;
    const data = await axios.get(productsUrl);
    if (data) {
      return data?.data;
    }
  } catch (err) {
    console.log(err);
  }
});
