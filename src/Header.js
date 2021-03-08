import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
  return (
    <div className="header">
      <img className="header__logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header__nav">
        <div className='header__option'>
          <span className='header__opitionLineOne'>
            Hello Guest
          </span>
          <span className='header__opitionLineTwo'>
            Sign In
          </span>
        </div>
        <div className='header__option'>
          <span className='header__opitionLineOne'>
            Returns
          </span>
          <span className='header__opitionLineTwo'>
            & Orders
          </span>
        </div>
        <div className='header__option'>
        <span className='header__opitionLineOne'>
            Your
          </span>
          <span className='header__opitionLineTwo'>
            Prime
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
