import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import { AuthProvider } from "./context/UserContext";
import Bootstrap from "./BootStrap";
import { Provider } from 'react-redux';
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
// const WrappedComponent = RequireAuth(AuthenticatedPage);
// const WrappedService = RequireAuth(Service);
// const WrappedReport = RequireAuth(Report);
root.render(
  // <React.StrictMode>
  <>
    {/* <AuthProvider>
      <Bootstrap />
    </AuthProvider> */}
    <Provider store={store}> 
    <Bootstrap />
    </Provider>
  </>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
