import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/AuthSlice";

export default function Header(WrappedComponent, {name}) {
  

  return function WrappedHeader() {

  // const auth = useAuth()
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    // auth.logout();
    dispatch(logout())
    navigate('/')
    
    
  }
      return (
        <div>
          <p>This is {name || user } header</p>
          <button>
            <Link to="/login">Login</Link>
            </button>
            <button onClick={handleLogout}> Logout
          </button>
          <WrappedComponent></WrappedComponent>
        </div>
      );
    }
  };
