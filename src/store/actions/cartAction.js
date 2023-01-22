import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE, DECREASE } from '../action_type';

const addToCart = (cartItem) => {
    return ({
        type: ADD_TO_CART,
        data: cartItem
    })
} 
const increase = (id) => {
    return ({
        type: INCREASE,
        data: id
    })
} 
const decrease = (id) => {
    return ({
        type: DECREASE,
        data: id
    })
} 
const cartAction = {addToCart, increase, decrease};

export default cartAction;