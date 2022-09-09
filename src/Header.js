import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import TocIcon from '@material-ui/icons/Toc';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css';

function Header() {
    return (
    <div className='header'>
        <img src={"https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.png"} 
        alt="" 
    />
        <div className='header_center' >
            <input type="text" name="" id="" />
            <SearchIcon />
        </div>
        
        <div className='header_right' >
            <h4>Become a host</h4>
            <LanguageIcon />
        </div>
        <div className='header_right2' >
            <TocIcon />
            <AccountCircleIcon/>
        </div>
    </div>
)
}

export default Header
