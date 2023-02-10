import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const filteredSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    aToz: (state, { payload }) => {
      state.products = payload?.sort((a, b) =>
        a?.firsttitle?.toLowerCase() > b?.firsttitle?.toLowerCase() ? 1 : -1
      );
          
      },
      price: (state, { payload }) => {
      state.products = payload?.sort((a, b) =>
        parseInt(a?.Price) >parseInt( b?.Price )? 1 : -1
      );
      },
      rating: (state, { payload }) => {
      state.products = payload?.sort((a, b) =>
        parseInt(a?.Rating) > parseInt(b?.Rating) ? 1 : -1
      );
    },
  },
});


export const {rating,price,aToz} = filteredSlice.actions
export default filteredSlice.reducer