// import { useEffect } from 'react';
// import './App.css';
// import UserTable from './components/UserTable'
// import UserForm from './components/UserForm'
// import { UserProvider } from './context/UserContext';
// import SearchBox from './components/SearchBox';
// import SortResult from './components/SortResult';
// import FileUploader from './components/FileUploader';
// import Header from './components/Header';
// import { ErrorBoundary } from 'react-error-boundary';
// import { Fallback } from './components/Fallback';

// function App() {


//   useEffect(() => {
//     console.log('mounting App');
//   }, [])

//   const SearchHead = Header(SearchBox)
//   const Form = Header(UserForm)
//   const errorHandler = (error, errorInfo) => {
//     console.log('Logging: ', error, errorInfo);
//   }

//   return (
//     <UserProvider>
//       <div className="App">
//         <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
//         <br/>
//           <SearchHead name="search"/>
//           <br/>
//          <SortResult></SortResult><br/>
//          <UserTable></UserTable><br/>
//          <Form name="form"/><br/>
//          <FileUploader></FileUploader>
//          </ErrorBoundary>
//        </div>
//      </UserProvider>
//   );
// }

// export default App;

import './App.css'
import Header from "./HOC/Header"
import PublicPage from "./components/PublicPage"

function App() {
  return (
    <div className="App">
      <PublicPage />
    </div>
  )
}

export default Header(App, {
  name: "publicPage"
});