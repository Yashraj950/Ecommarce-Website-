import { getCartProductFromLS } from "./getCartProducts";

 export const updateCartProductTotal = () =>  {
    let arrLocalStorageProduct= getCartProductFromLS();
    let initialValue = 0; 
    let totalProductPrice = localCartProducts.reduce(( accum,curElem) => {
        let productPrice = parseInt (curElem.price) || 0; 
        return accum + productPrice; 

    }, initialValue);


    productSubTotal.textContent = ` ₹ ${totalProductPrice }`

    productFinalTotal.textContent =` ₹ ${totalProductPrice + 50}`


    

}