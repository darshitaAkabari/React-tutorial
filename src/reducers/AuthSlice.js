import  { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const AuthSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        login: (state, action) => {
            console.log('🥶 in: ', state, action);
            state.value = action.payload
            Cookies.set('user', state.value)
        },
        logout: (state) => {
            state.value = null
            Cookies.remove('user')
        }
    }
})

export const {login, logout} = AuthSlice.actions

export default AuthSlice.reducer