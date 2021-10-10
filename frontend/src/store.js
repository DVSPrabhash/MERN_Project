import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'




import { authReducer, userReducer, forgotPasswordReducer, allUserReducer, userDetailsReducer } from "./reducers/userReducers";

import { productsReducer, newProductReducer, productReducer, productDetailsReducer } from './reducers/productReducers';
import { offersReducer, newOfferReducer, offerReducer, offerDetailsReducer } from './reducers/offerReducers';


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
    offer: offerReducer
})


let initialState = {}
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store;