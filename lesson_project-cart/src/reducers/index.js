import {combineReducers} from 'redux';
import product from './products';
import cart from './cart';
import message from './message';


const defaultReducers= combineReducers({
    product,
    cart,
    message
})

export default defaultReducers