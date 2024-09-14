// import { getCartProductFromLS } from "./getCartProduct";

const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
  // let localCartProducts = getCartProductFromLS();

  return (cartValue.innerHTML = `  <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
};
