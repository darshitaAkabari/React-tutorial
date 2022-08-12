import Cookies from "js-cookie";
import { Navigate } from "react-router-dom"
// import { useAuth } from "../context/UserContext"

// export default function RequireAuth(WrappedComponent) {
//     return function WrappedFunction() {
//         const auth = useAuth();
//         if(!auth.user){
//             return <Navigate to="/login"></Navigate>
//         }
//         return (
//             <WrappedComponent />
//         )
//     }
// }

export const RequireAuth = ({children}) => {
    console.log('🥶 HEY: ');
        if(!Cookies.get('user')){
            return <Navigate to="/login"></Navigate>
        }
        return children
}

