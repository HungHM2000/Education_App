
import { LOGIN_REQUEST } from "../Constants";

const initialStale = {
    userName: '',
    passWord: '',
    isLoading: true
}
const loginReducer = (state = initialStale, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                userName: action.userName,
                passWord: action.passWord
            }
        default:
            return state
    }

}
export default loginReducer