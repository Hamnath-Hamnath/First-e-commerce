// For adding items in the cart
export const addCart = product => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// For delete items in the cart
export const deleteCart = product => {
    return{
        type : "DELITEM",
        payload : product
    }
}