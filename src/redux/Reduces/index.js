import { combineReducers } from "redux"
import loginReducer from "./loginReducer"

const reducers = combineReducers({
    loginState: loginReducer
})
export default (state, action) => reducers(state, action)