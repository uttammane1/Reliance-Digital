import { DELETE_ADMIN_ERROR, DELETE_ADMIN_LOADING, DELETE_ADMIN_SUCCESS, GET_ADMIN_ERROR, GET_ADMIN_LOADING, GET_ADMIN_SUCCESS, RESET_ADMIN_PRODUCTS } from "./admin.actionTypes";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const adminReducer = (state = productInitalState, {type,payload}) => {
  switch(type){
    case GET_ADMIN_LOADING: {
      return{
        ...state,
        loading : true,
      }
    }
    case GET_ADMIN_SUCCESS: {
      return{
        ...state,
        loading : false,
        data : payload,
      }
    }
    case GET_ADMIN_ERROR : {
      return {
        ...state,
        loading : false,
        error : true,
      }
    }
    case RESET_ADMIN_PRODUCTS: {
      return{
        ...state,
      }
    }

    case DELETE_ADMIN_LOADING : {
        return {
            ...state,
            loading : true,
        }
    }
    case DELETE_ADMIN_SUCCESS : {
        const filterDeleteProducts = state.data.filter((product) => product.id !== payload);
        return{
            ...state,
            data : filterDeleteProducts,
        }
    }
    case DELETE_ADMIN_ERROR : {
        return{
            ...state,
            loading : false,
            error : payload,
        }
    }

    default : {
      return state;
    }
  }
};