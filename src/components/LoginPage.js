import React from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from '../context/UserContext'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import {login} from "../reducers/AuthSlice"
function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [user,setUser] = useState('')
    // const auth = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = (data) => {
        // auth.login(data.email)
        dispatch(login(data.email))
        navigate('/authenticatedPage')
        
    }

    return (
        // <div style={{textAlign : "center"}}> 
        //     <input type="text" name="email" placeholder="Email" onChange={(e) => setUser(e.target.value)}></input><br /><br />
        //     <input type="password" name="password" placeholder="Password"></input> <br /> <br />
        //     <button onClick={handleLogin}> Login
        //     </button>
        // </div>
        <form onSubmit={handleSubmit(handleLogin)} style={{textAlign : "center"}}>
            <input placeholder=" Enter your Email-Id" {...register("email", {required: true ,pattern: /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/})} /><br />
            {errors.email &&  <span>Email-id required in correct form</span>}<br/><br />
            <input placeholder="Password" {...register("password", {required: true})} /><br />
            {errors.password && <span>Please Enter the password</span>}<br /><br />
            <input type="submit" />

        </form>
    )
}

export default LoginPage