import { combineReducers } from "redux";

import usersReducers from './reducer'
import counterReducers from "./counterReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
    data: usersReducers,
    counter: counterReducers,
    auth: authReducer
})

export default rootReducer