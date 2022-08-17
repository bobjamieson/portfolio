import React, { useState } from 'react';

const MainNav = () => {

    const [burgerActive, setBurger] = useState(false);

    const burgerClick = () => {
        setBurger(!burgerActive)
    }

    return (
        
        <div>
            <button 
                className={burgerActive ? "hamburger hamburger--squeeze is-active" : "hamburger hamburger--squeeze"}
                onClick={burgerClick}
                type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>

            { burgerActive ? (
                    <nav>
                        <li>Work</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </nav>)
                : null
            }
         </div>
    )
}

export default MainNav