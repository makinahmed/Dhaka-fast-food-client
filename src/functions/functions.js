export const makeSubTotal = (cartProducts) => {
  return cartProducts?.map((product) => {
    let price = product.currentPrice;
    let quantity = parseInt(product.quantity);
    let subTotal = price * quantity;

    return subTotal;
  });
};

export const makeTotal = (totalPrice) => {
  return totalPrice?.reduce((p, c) => {
    return p + c;
  }, 0).toFixed(2);
};


export const productDiscount = (product) => {
  const price = product.Price;
  const discount = product.discount;
  const prevPrice = parseFloat(price);
  const discountFloat = parseFloat(discount);
  let totalDiscountAmount = (price * discountFloat) / 100;
  let currentPrice = prevPrice - totalDiscountAmount;
  return { prevPrice, currentPrice };
};