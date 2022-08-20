import React from 'react';
import MainNav from './MainNav'
import './Header.css'
 
const Header = () => {

    return (
        <div>
            <div className='Header-container'>
                <img src='./logo.png' className='App-logo' alt='logo'
                 />
            </div>
            
            <div className='Nav-container'>
                <div className='Subtext-container'>
                    <h3>{'<Front End Developer />'}</h3>
                </div>
                <MainNav />            
            </div>
        </div> 
    )
}

export default Header