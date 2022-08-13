import Cookies from "js-cookie"

const initialState = {
    user: null
}

export default function userInfo(state = [], action) {
    console.log('🥶 in reducer: ');
    switch (action.type) {
        case 'LOGIN':
            Cookies.set('user',action.data)
            return {...state, ...{user: action.data}}

        case 'LOGOUT':
            Cookies.remove('user')
            return {...state, ...{user: null}}

        default:
            return state
    }
}