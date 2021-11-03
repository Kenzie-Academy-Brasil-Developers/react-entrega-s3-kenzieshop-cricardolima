import { ADD_PRODUCTS, REMOVE_PRODUCTS } from "./actionType";

export const addToCart = (product) => ({ type: ADD_PRODUCTS, product });

export const removeFromCart = (list) => ({ type: REMOVE_PRODUCTS, list });
