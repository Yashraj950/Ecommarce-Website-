import './style.css'


import products from "./api/products.json";
import { showProductContainer } from './api/homeProductCards';


//  Define a function name  `showProductContainer` that takes a an array of products as input.

showProductContainer(products);