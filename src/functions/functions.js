export const makeSubTotal = (cartProducts) => {
  return cartProducts?.map((product) => {
    let price = product.currentPrice;
    let quantity = parseInt(product.quantity);
    let subTotal = price * quantity;
    return subTotal;
  });
};

export const makeTotal = (totalPrice) => {
  return totalPrice
    ?.reduce((p, c) => {
      return p + c;
    }, 0)
    .toFixed(2);
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

export const cuponDiscount = (cupon, total) => {
  let discount = parseInt(cupon.discount);
  let amount = (total * discount) / 100;

  return total - amount;
};

/// Sorting ....

export const sorting = (products, category) => {
  console.log( category,'parameter');
  let data = [...products];


  if (category === "A to Z") {

    data = data?.sort((a, b) =>
      a?.firsttitle?.toLowerCase() > b?.firsttitle?.toLowerCase() ? 1 : -1
    );
    console.log(data, "A to Z");
    return data;
  }

  if (category === "Price") {
    data = data?.sort((a, b) =>
      parseInt(a?.Price) > parseInt(b?.Price) ? 1 : -1
    );
    return data;
  }
  if (category === "Rating")
    data = data.sort((a, b) =>
      parseInt(a?.Rating) > parseInt(b?.Rating) ? 1 : -1
    );
  return data;
};
