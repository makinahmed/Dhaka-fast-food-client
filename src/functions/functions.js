export const makeSubTotal = (cartProducts) => {
  cartProducts?.map(product => {
    let price = product.currentPrice;
      let quantity = product.quantity;
      let subTotal = price * quantity;
      
    return subTotal;
  });
};

 

export const makeTotal = (totalPrice) => {
  return totalPrice?.reduce((p, c) => {
    return p + c;
  }, 0).toFixed(2);
};


