import './App.css';
import Header from './components/Header'; // 3.1
import Home from './components/Home'; // 3.4
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // 3.7
import Checkout from './components/Checkout'; // 3.8
function App() { 
  return (
    <Router>{/* 3.7 */}
    <div className='app'>

      <Header/> {/* 3.8 */}

      <Routes> {/* 3.7 */}
      
      <Route
       path = "/checkout"

       element = {<Checkout/>} // 3.8

       // element = {[<Header/>, <h1>this is checkout</h1>]} /* **** use square [] and COMMA to list multiple tags under element attribute */ 3.7

       />

      <Route /* 3.7 */
       path = "/"

       element = {<Home/>}
       

      //  element = {[<Header/> /* 3.1 */, <Home/>/* 3.3 */]} 
      //  /* **** use square [] and COMMA to list multiple tags under element attribute */  3.7

       />




      </Routes>

    </div>
      </Router>
      
     
      
  );
}

export default App;
