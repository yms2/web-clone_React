import React from "react";
import './Header.css';

function Header(){
    return(
        <div>
            <div className="header">
                <img className="logo">
                    
                </img>
                <nav className="Nav">
                    <ul>
                        <li><a href="">Company</a></li>
                        <li><a href="">Product infrastructure</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Use-Cases</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Potential Businesses</a></li>
                        <li><a href="">IR</a></li>
                    </ul>
                </nav>
                <div className="button">
                    <div className="b_1">IR Book</div>
                    <div className="b_2">KOR</div>
                </div>
            </div>
        </div>
    )
}export default Header;