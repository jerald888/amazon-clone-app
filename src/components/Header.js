import React from 'react'
import "./Header.css" // 3.2
import SearchIcon from '@mui/icons-material/Search'; // 3.3
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; // 3.3

import {Link} from "react-router-dom" // 4.2

import {useStateValue} from "../data-layer/StateProvider" // 4.7
import { auth } from '../firebase';



function 
Header () {

    const [ {basket, user /* 7.5 */}, dispatch] = useStateValue(); // 4.7.... dispatch is optional
    // curly {} around the basket is important else count won't work

    const handleAuthentication = () => {
        auth.signOut()
    }


  return (
    <div className='header'>
        <div className='header__logoContainer'>

        <Link to = "/"> {/* 4.2 */}

        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className='header__logo' />
        
        </Link>
         
        </div>

        <div className='header__searchContainer'> 
            <input type="text" className='header__searchInput' />
            <SearchIcon className='header__searchIcon'/> {/* 3.3 */}
        </div>

        <div className='header__nav'>
            <Link to = {!user && "./login"} > {/* 7.1 */} {/* 7.6 !user  */}

            <div className='header__option'> {/* 3.3 */}
                <span className='header__optionLineOne'>Hello {user? user?.email : "Guest"}</span>
                <span 
                onClick = {handleAuthentication}
                className='header__optionLineTwo'>{user ? "Sign Out" : "Sign In"} {/* 7.5 */}</span> {/* 7.6 onclick */}
            </div>
            </Link>

            <div className='header__option'> {/* 3.3 */}
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>

            </div>

            <div className='header__option'> {/* 3.3 */}
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>


            <Link to = "/checkout" > {/* 4.2 */}

            <div className='header__optionBasket'>
                <ShoppingBasketIcon/> {/* 3.3 */}
                <span className='header__optionLineTwo header__basketCount'>{basket?.length} {/* 4.7 */}</span> {/* 3.3 */}
            </div>

            </Link>

            {console.log(basket.length)}
        </div>
        {console.log("yay header")}
    </div>
  )
}

export default Header


