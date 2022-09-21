import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './redux/reducers/userReducers'


import { steponesReducer, newSteponeReducer, steponeReducer, steponeDetailsReducer } from './redux/reducers/steponeReducers'
import { steptwosReducer, newSteptwoReducer, steptwoReducer, steptwoDetailsReducer } from './redux/reducers/steptwoReducers'
import { stepthreesReducer, newStepthreeReducer, stepthreeReducer, stepthreeDetailsReducer } from './redux/reducers/stepthreeReducers'

const reducer = combineReducers({
   
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
   

    stepones: steponesReducer,
    steponeDetails: steponeDetailsReducer,
    newStepone: newSteponeReducer,
    stepone: steponeReducer,

    steptwos: steptwosReducer,
    steptwoDetails: steptwoDetailsReducer,
    newSteptwo: newSteptwoReducer,
    steptwo: steptwoReducer,

    stepthrees: stepthreesReducer,
    stepthreeDetails: stepthreeDetailsReducer,
    newStepthree: newStepthreeReducer,
    stepthree: stepthreeReducer,
})




const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;