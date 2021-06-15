import React from 'react';
import './header.scss';

function Header(props) {
    return (
            <header>
                <nav class="navbar" id="nav">
                    <div class="nav-left">
                        <div class="logo">
                            <img src="img/logo.svg" alt="" />
                        </div>
                        <ul class="menu">
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV Show</a></li>
                            <li><a href="#">People</a></li>
                            <li><a href="#">More</a></li>
                        </ul>
                    </div>
                    <div class="nav-right">
                        <ul class="info">
                            <li class="language">
                                <div class="lang">EN</div>
                            </li>
                        <li class="login">
                            <a href="#">Login</a>
                        </li>
                        <li class="register">
                                <a href="#">Register</a>
                            </li>
                            <li class="search">
                                <i class="fas fa-search"></i>    
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        
        
    );
}

export default Header;