import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/UserContext";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../reducers/AuthSlice";
import { connect } from "react-redux";
import { logout } from "../actions/action"


const mapStateToProps = (state) => {
  return ({
  data: state.userInfo.user // state
})}

const mapDispatchToProps = (dispatch) => ({
  logoutHandler: ()=>{
    dispatch(logout())}
})

function Header(WrappedComponent, {name}) {
  

  return connect(mapStateToProps, mapDispatchToProps)(function WrappedHeader(props) {

  // const auth = useAuth()
  // const user = useSelector((state) => state.user.value)
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    // auth.logout();
    // dispatch(logout())
    props.logoutHandler()
    navigate('/') 
  }
  
      return (
        <div>
          <p>This is {name || props.data || "Not available" } header</p>
          <button>
            <Link to="/login">Login</Link>
            </button>
            <button onClick={handleLogout}> Logout
          </button>
          <WrappedComponent></WrappedComponent>
        </div>
      );
    })
  };

export default Header
