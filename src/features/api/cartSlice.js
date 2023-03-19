import { productDiscount } from "../../functions/functions";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const price = productDiscount(payload);

     const currentProduct = { ...payload, ...price };
       const isExist = state?.cart?.find(
          (product) => product._id === currentProduct._id
        );
      if (!isExist) {
        state.cart = [
          ...state.cart,
          {
            ...currentProduct,
            quantity: 1,
            order: state.cart.length,
          },
        ];
      }

      if (isExist) {
        isExist.quantity = isExist.quantity + 1;
        state.cart
          .filter((product) => product._id !== currentProduct._id)
          .push(isExist);
      }
      state?.cart.sort((a, b) => a.order - b.order);
    },
    addQuantity: (state, { payload }) => {
      // payload.product.quantity += payload.value;
      if (payload.value < 0) return;
      const remainingProducts = state?.cart?.filter(
        (product) => product._id !== payload.product._id
      );

      state.cart = [
        ...remainingProducts,
        { ...payload.product, quantity: payload.value },
      ];
      state?.cart.sort((a, b) => a.order - b.order);
    },
    removeFromCart: (state, { payload }) => {
      const isExist = state?.cart?.find(
        (product) => product._id === payload._id
      );

      if (isExist) {
        let newCart = state.cart.filter(
          (product) => product._id !== payload._id
        );
        state.cart = [...newCart];
        state?.cart.sort((a, b) => a.order - b.order);
      } else {
        return state;
      }
    },
  },
});

export const { addToCart, addQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
