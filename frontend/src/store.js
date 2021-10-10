import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'




import { authReducer, userReducer, forgotPasswordReducer, allUserReducer, userDetailsReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    allUsers: allUserReducer,
    forgotPassword: forgotPasswordReducer,
    userDetails: userDetailsReducer,
})


let initialState = {}
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store;