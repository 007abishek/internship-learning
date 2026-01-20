const initialState = {
  cartItems: [],
  error: null,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART_SUCCESS":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        error: null, // ✅ clear error
      };

    case "REMOVE_FROM_CART_SUCCESS":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload
        ),
        error: null, // ✅ clear error
      };

    case "ITEM_ALREADY_IN_CART":
      return {
        ...state,
        error: "Item already exists in cart",
      };

    case "ADD_TO_CART_TIMEOUT":
      return {
        ...state,
        error: "Request timeout",
      };

    default:
      return state;
  }
}
