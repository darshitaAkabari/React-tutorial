import { act } from "react-dom/test-utils"

const initialState = {
    user: null
}

export default function userInfo(state = [], action) {
    switch (action.type) {
        case 'LOGIN':
            return [...state, {user: action.data}]

        case 'LOGOUT':
            return [...state, {user: action.data}]

        default:
            return state
    }
}