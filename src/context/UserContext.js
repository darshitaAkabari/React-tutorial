import Cookies from "js-cookie";
import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext();

// export const UserProvider = props => {
//     const [user, setUser] = useState([]);
//     useEffect(() => {
//         getAllUser().then((res)=>{setUser(res);});
//     },[]);
//     return (
//         <UserContext.Provider value={[user, setUser]}>
//             {props.children}
//         </UserContext.Provider>
//     );
// };

export const AuthProvider = props => {
    const [user, setUser] = useState();
    const login = user => {
        setUser(user)
        // localStorage.setItem("user", user )
        // document.cookie = "email="+user
        Cookies.set('user', user)
    }

    const logout = () => {
        console.log('🥶 in logput: ');
        setUser(null)
        Cookies.remove('user')
    }

    return <AuthContext.Provider value={{user, login, logout}}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}