import './App.css';
import Header from './components/Header'; // 3.1
import Home from './components/Home'; // 3.4
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // 3.7
import Checkout from './components/Checkout'; // 4.1

import { auth } from './firebase'; // 8.2
import {useEffect} from "react" // 8.2
import { useStateValue } from './data-layer/StateProvider'; // 8.2

import Login  from './components/Login';
function App() { 

  const [{}, dispatch] = useStateValue() // 8.2

  useEffect(() => { /* 8.2 */
    
    auth.onAuthStateChanged((authUser) => { /* 8.2 */
      console.log("logged in user detail", authUser) 

      if(authUser) { /* 8.2 */
      // user is logged in 
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else { /* 8.2 */
        //user is logged out
        dispatch({ /* 8.2 */
          type: "SET_USER",
          user: null
        })

      }

    })


  }, []);

  return (
    <Router>{/* 3.7 */}
    <div className='app'>

      {/* <Header/> 3.8  */}

      <Routes> {/* 3.7 */}

      <Route
      path = "/login"
      element = {<Login/>}
      /> {/* 7.1 */}
      
      <Route
       path = "/checkout"

       element = {[<Header/>, <Checkout/>]} // 3.8

       // element = {[<Header/>, <h1>this is checkout</h1>]} /* **** use square [] and COMMA to list multiple tags under element attribute */ 3.7

       />

      <Route /* 3.7 */
       path = "/"

       element = {[<Header/>, <Home/>]}
       

      //  element = {[<Header/> /* 3.1 */, <Home/>/* 3.3 */]} 
      //  /* **** use square [] and COMMA to list multiple tags under element attribute */  3.7

       />




      </Routes>

    </div>
      </Router>
      
     
      
  );
}

export default App;
