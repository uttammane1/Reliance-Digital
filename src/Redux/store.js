// Store Code Here

import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  
import thunk from "redux-thunk";
import { adminReducer } from "./admin/admin.reducer";
import { authAdminReducer } from "./adminAuth/adminAuth.reducer";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import {postReducer} from "./Products/product.reducer"
  
  const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({
         product:postReducer,
        adminProductsManager : adminReducer,
        cartManager : cartReducer,
        adminAuthManager : authAdminReducer,
        authManager : authReducer,
  });
  export const store = legacy_createStore(
    rootReducer,
    composeInhancer(applyMiddleware(thunk))
  );