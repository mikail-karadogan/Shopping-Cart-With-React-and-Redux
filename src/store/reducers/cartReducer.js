import { ADD_TO_CART, DECREASE, INCREASE } from "../action_type";

const initialCart = {
  cart: [],
};
const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.data.payload.id
      );
      if (itemIndex >= 0) {
        return { ...state, ...(state.cart[itemIndex].quantity += 1) };
      } else {
        const data = { ...action.data.payload, quantity: 1 };
        return {
          ...state,
          cart: [...state.cart, data],
        };
      }
    case INCREASE:
      const dataId = state.cart.findIndex(
        (item) => item.id === action.data.data
      );
      return { ...state, ...(state.cart[dataId].quantity += 1) };
    case DECREASE:
      const decreaseIndex = state.cart.findIndex(
        (item) => item.id === action.data.data
      );
      if (state.cart[decreaseIndex].quantity >= 2) {
        return { ...state, ...(state.cart[decreaseIndex].quantity -= 1) };
      } else {
        const newCart = state.cart.filter(
          (item, index) => action.data.data != item.id && item.quantity >= 1
        );
        return { ...state, cart: newCart };
      }

    default:
      return state;
  }
};

export default cartReducer;
