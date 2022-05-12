import React from 'react' 
import "./Login.css" // 7.1
import {Link} from "react-router-dom" // 7.1
import {useState} from "react" // 7.1


function Login() { /* 7.1 */

const [email, setEmail] = useState("") // 7.1
const [password, setPassword] = useState("") // 7.1

const signIn = (e) => {

    e.preventDefault()
    
    // FIREBASE CODE HERE
} // 7.1 to prevent reload (on signin button)

const register = (e) => {

    e.preventDefault()

    // FIREBASE CODE HERE
}
  // 7.1 to prevent reload (on create account button)

  return (
    <div className='login'>
        <Link to = "/"> {/* 7.1 */}

        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
        
        </Link>
 
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="text" /> {/* 7.1 */}

                <h5>Password</h5>
                <input value = {password} 
                onChange = { (e) => setPassword(e.target.value)} type="password" /> {/* 7.1 */}

                <button 
                type = "submit"
                onClick={signIn}
                className='login__signInButton'>Sign In</button> {/* 7.1 */}
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button type = "submit" 
            onClick={register}
            className='login__registerButton'>Create your Amazon account</button> {/* 7.1 */}

        </div>

    </div>
  )
}

export default Login