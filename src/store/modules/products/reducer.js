const defaultState = [
    { 
        id: 1,
        name: "The Judge's List: A Novel",
        image: "https://images-na.ssl-images-amazon.com/images/I/41E3EKUlXGS._SX327_BO1,204,203,200_.jpg",
        price: 84.54,
    },
    {
        id: 2,
        name: "The Lincoln Highway: A Novel",
        image: "https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._SX329_BO1,204,203,200_.jpg",
        price: 108.51,
    },
    {
        id: 3,
        name: "The Wish",
        image: "https://images-na.ssl-images-amazon.com/images/I/51wfzg618CL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        price: 90.18,
    },
    {
        id: 4,
        name: "State of Terror: A Novel",
        image: "https://images-na.ssl-images-amazon.com/images/I/51P70ubxiUS._SX329_BO1,204,203,200_.jpg",
        price: 104.51,
    },
    {
        id: 5,
        name: "It Ends with Us: A Novel",
        image: "https://m.media-amazon.com/images/I/51Zu0ZwT0jL.jpg",
        price: 134.00,
    },
];

const productsReducer = (state = defaultState, action) => {
    return state;
}

export default productsReducer;