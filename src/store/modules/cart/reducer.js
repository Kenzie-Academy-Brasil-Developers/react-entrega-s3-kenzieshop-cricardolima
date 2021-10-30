import { ADD_PRODUCTS, REMOVE_PRODUCTS } from "./actionType";

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            const {product} = action
            return [...state, product];
        case REMOVE_PRODUCTS:
            const { list } = action;
            return list;
        default:
            return state;
    }
};

export default cartReducer