export const login = (data) => {
    return {
        type:'LOGIN',
        data:data
    }
}

export const logout = () => {
    return {
        type:'LOGOUT',
    }
}