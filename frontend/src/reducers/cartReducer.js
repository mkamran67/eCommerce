import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM: {
      // Incoming Product -> Added to cart
      const item = payload;

      // Check if product/item exist in cart
      const existItem = state.cartItems.find(
        (el) => el.product === item.product
      );

      // if True ->
      if (existItem) {
        return {
          ...state,
          // Loop through current Cart items and if matching product replace with incoming item
          cartItems: state.cartItems.map((el) =>
            el.product === existItem.product ? item : el
          ),
        };
      } else {
        // Since item not in cart add to state
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    }
    case CART_REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.product !== payload),
      };
    }

    default:
      return state;
  }
};
