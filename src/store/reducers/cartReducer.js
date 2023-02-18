import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

  

    case REMOVE_FROM_CART:
      let itemIndex = state.cartItems.findIndex((c) => c.product.id === payload.id)

      let nextCartItem =state.cartItems.filter((c) => c.product.id !== payload.id)
      if(state.cartItems[itemIndex].quantity > 1) {

        state.cartItems[itemIndex].quantity -=1

        return {
          ...state,
        };

      } else if(state.cartItems[itemIndex].quantity === 1) {
        return {
          ...state,
          cartItems: nextCartItem
       };
      }
      

    default:
      return state;
  }
}
