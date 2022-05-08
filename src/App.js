import './App.css';
import Header from './components/Header'; // 3.1
import Home from './components/Home'; // 3.4
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // 3.7
function App() {
  return (
    <div className='app'>
      <Router>{/* 3.7 */}

      <Routes> {/* 3.7 */}
      
      <Route /* 3.7 */
       path = "/"
       element = {[<Header/> /* 3.1 */, <Home/>/* 3.3 */]} 
       /* **** use square [] and COMMA to list multiple tags under element attribute */  
       />

       <Route
        path = "/checkout"
        element = {[<Header/>, <h1>this is checkout</h1>]} /* **** use square [] and COMMA to list multiple tags under element attribute */ 
        />



      </Routes>

      </Router>
      
     
      
    </div>
  );
}

export default App;
