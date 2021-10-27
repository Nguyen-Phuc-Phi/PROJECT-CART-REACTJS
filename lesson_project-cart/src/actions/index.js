import * as types from "./../constants/actionTypes"

export const actAddtoCart=(product,quantity)=>{
    return ({
        type:types.ADD_TO_CART,
        product,
        quantity
    })
}

export const changeMessage=(message)=>{
    return ({
        type:types.CHAGE_MESSAGE,
        message
    })
}   

export const deleteCart=(product)=>{
    return ({
        type:types.DELETE_CART,
        product
    })
}

export const updateCart=(product,quantity)=>{
    return ({
        type:types.UPDATE_CART,
        product,
        quantity
    })
}