    // add products to cart  action
export const Add = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}
        // Delete products from cart action
export const Delete = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }
}
        // Decrement quantity from cart action
export const Decremnt = (item) => {
    return {
        type: "DEC_QNTY",
        payload: item
    }
}