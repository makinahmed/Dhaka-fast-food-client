const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExist = state?.cart?.find(
        (product) => product._id === payload._id
      );
      !isExist && state?.cart?.push({ ...payload, quantity: 1 });
      if (isExist) {
        isExist.quantity = isExist.quantity + 1;
        state.cart
          .filter((product) => product._id !== payload._id)
          .sort((a, b) => a - b)
          .push(isExist);
      }
    },
    addQuantity: (state, { payload }) => {
      // payload.product.quantity += payload.value;
      if (payload.value < 0) return;
      const remainingProducts = state?.cart?.filter(
        (product) => product._id !== payload.product._id
      );

      state.cart = [...remainingProducts, {...payload.product,quantity:payload.value}];
    },
  },
});

export const { addToCart, addQuantity } = cartSlice.actions;
export default cartSlice.reducer;
