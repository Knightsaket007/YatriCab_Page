import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className='nav-container'>
                <div className='logo-container'>
                    <img src='../images/logo.png' alt='img'></img>
                </div>

                <div className='mid-img'>
                    <img src='../images/clock247.svg' alt='img'></img>
                </div>

                <div className='last-img-group'>
                    <div className='wrapper-button'>
                        <img src='../images/download.svg' alt='img'></img>
                        <p>Download App</p>
                    </div>
                    <div className='wrapper-button'><img src='../images/user.svg' alt='img'></img>
                    <p>Ravi</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar