import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Header=() =>{
    return(
        <div className="header-main">
            <div className="container header-container">
            <div className="header">
                <img src="static/images/logo.png" alt="Logo" className="header-img"/>
                <div className="header-title">Vir <span>Innovations</span></div>
            </div>
            <div className="header-options">
                <ul className="header-list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Clientele</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        </div>
        
    )
}

export default Header