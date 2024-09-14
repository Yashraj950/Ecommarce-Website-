import { updateCartValue } from "./updateCartValue";
import { getCartProductFromLS } from "./getCartProduct";

getCartProductFromLS();
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;

  let price = currentProdElem.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd) {
    return false;
  }

  price = Number(price * quantity);

  quantity = Number(quantity);

  arrLocalStorageProduct.push(id, quantity, price);

  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
};
