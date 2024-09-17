import { updateCartValue } from "./updateCartValue";
import { getCartProductFromLS } from "./getCartProducts";

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

  if (existingProd && quantity > 1) {
    quantity =  Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updateCart = { id, quantity, price };
    
    updateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    });
    console.log(updateCart);
    

    localStorage.setItem(
      "cartProductLS",
      JSON.stringify(updateCart)
    );
  }

  if (existingProd) {
    return false;
  }

  price = Number(price * quantity);

  quantity = Number(quantity);

  arrLocalStorageProduct.push({id, quantity, price});


  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
  showToast("add", id);
};
