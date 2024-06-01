// cart reducer code here

import {
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
  DELETE_CART_ERROR,
  DELETE_CART_LOADING,
  DELETE_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
  RESET_CART_PRODUCT,
} from "./cart.actionTypes";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const cartReducer = (state = productInitalState, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case RESET_CART_PRODUCT: {
      return {
        ...state,
      };
    }
    case ADD_TO_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
      };
    }
    case ADD_TO_CART_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }

    case DELETE_CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case DELETE_CART_SUCCESS: {
      const filterDeleteProducts = state.data.filter(
        (product) => product.id !== payload
      );
      return {
        ...state,
        data: filterDeleteProducts,
      };
    }
    case DELETE_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};
