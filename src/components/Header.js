import React from 'react'
import "./Header.css" // 3.2
import SearchIcon from '@mui/icons-material/Search'; // 3.3
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; // 3.3

function 
Header () {
  return (
    <div className='header'>
        <div className='header__logoContainer'>
        <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" alt="amazon logo" className='header__logo' />
        </div>

        <div className='header__searchContainer'> 
            <input type="text" className='header__searchInput' />
            <SearchIcon className='header__searchIcon'/> {/* 3.3 */}
        </div>

        <div className='header__nav'>
            <div className='header__option'> {/* 3.3 */}
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>

            <div className='header__option'> {/* 3.3 */}
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>

            </div>

            <div className='header__option'> {/* 3.3 */}
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <div className='header__optionBasket'>
                <ShoppingBasketIcon/> {/* 3.3 */}
                <span className='header__optionLineTwo header__basketCount'>0</span> {/* 3.3 */}
            </div>

        </div>
        
    </div>
  )
}

export default Header


