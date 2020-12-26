import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// ---------------------------------------------------------------- Product Reducers
import {
  productReducer,
  productDetailsReducer,
} from './reducers/productReducer';

// ---------------------------------------------------------------- Cart Reducers
import { cartReducer } from './reducers/cartReducer';

// ---------------------------------------------------------------- User Reducers
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';

// ---------------------------------------------------------------- Order Reducers
import {
  orderCreateReducer,
  orderDetailsReducer,
} from './reducers/orderReducers.js';

// ---------------------------------------------------------------- Combining reducers
const reducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
});

// Get Cart Items from localstorage for initial state.
const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// Get userInfo from localstorage for initial state.
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// Get address from localstorage for initial state.
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

// Get payment info from localstorage for initial state.
const paymentMethodFromLocalStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    paymentMethod: paymentMethodFromLocalStorage,
  },

  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
