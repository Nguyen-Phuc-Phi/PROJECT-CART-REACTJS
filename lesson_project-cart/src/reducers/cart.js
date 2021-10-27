import * as types from "../constants/actionTypes";
var data = JSON.parse(localStorage.getItem("CART"));
var initState = data ? data : [];

const cart = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = findProduct(state, action.product);
            if (index !== -1) {
                state[index].quantity += action.quantity;
            }
            else {
                state.push({
                    product: action.product,
                    quantity: action.quantity
                })
            }
            localStorage.setItem("CART", JSON.stringify(state));

            return [...state];
        case types.DELETE_CART:
            var indexs = findProduct(state, action.product);
            if (indexs !== -1) {
                state.splice(indexs,1);
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.UPDATE_CART:
            var indexsUpdate = findProduct(state, action.product);
            if (indexsUpdate !== -1) {
                state[indexsUpdate].quantity=action.quantity;
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

const findProduct = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
            }
        }
    }
    return index;
}
export default cart