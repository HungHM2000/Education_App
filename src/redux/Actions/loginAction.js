import { LOGIN_REQUEST } from '../Constants'


export function login(userName, passWord) {
    return {
        type: LOGIN_REQUEST,
        userName: userName,
        passWord: passWord
    }
}