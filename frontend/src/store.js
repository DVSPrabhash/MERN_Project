import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer, userReducer, forgotPasswordReducer, allUserReducer, userDetailsReducer } from "./reducers/userReducers";

import { productsReducer, newProductReducer, productReducer, productDetailsReducer } from './reducers/productReducers';
import { offersReducer, newOfferReducer, offerReducer, offerDetailsReducer } from './reducers/offerReducers';

import {
    newOrderReducer,
    myOrdersReducer, 
    allOrdersReducers ,
    adminUpdateOrdersReducers,
    orderDetailsReducer,
    orderUDReducer
} from './reducers/orderReducers'

import { cartReducer } from './reducers/cartReducer';


const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    allUsers: allUserReducer,
    forgotPassword: forgotPasswordReducer,
    userDetails: userDetailsReducer,

    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    offers: offersReducer,
    offerDetails: offerDetailsReducer,
    newOffer: newOfferReducer,
    offer: offerReducer,

    newOrder: newOrderReducer,
    orders: allOrdersReducers,
    adminUpdateOrder: adminUpdateOrdersReducers,
    myOrders: myOrdersReducer,
    myOrderDetails: orderDetailsReducer,
    userOrderFunctions: orderUDReducer,
    cart: cartReducer,
})


let initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        deliveryInfo: localStorage.getItem('deliveryInfo')
        ? JSON.parse(localStorage.getItem('deliveryInfo'))
        : {}
    }
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store;