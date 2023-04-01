//Para agrega items al Carrito

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

//Para eliminar items al Carrito

export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}
