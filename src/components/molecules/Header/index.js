import React, { useEffect } from 'react';
import './header.scss';


function Header(props) {
    const scroll = () =>{
        window.addEventListener("scroll",function(){
            var nav = document.getElementById('nav');
            if(window.scrollY > 110){
                nav.classList.add("nav-blue");
            }else if(window.scrollY < 100){
                nav.classList.remove("nav-blue")
            }

        })
    }

    useEffect(()=>{
        scroll();
    })

    
    return (
            <header>
                <nav class="navbar" id="nav">
                    <div class="nav-left">
                        <div class="logo">
                            <h3>MOVIE - APP</h3>
                        </div>
                        <ul class="menu">
                            <li><button>Movies</button></li>
                            <li><button>TV Show</button></li>
                            <li><button>People</button></li>
                            <li><button>More</button></li>
                        </ul>
                    </div>
                    <div class="nav-right">
                        <ul class="info">
                            <li class="language">
                                <div class="lang">EN</div>
                            </li>
                        <li class="login">
                            <button>Login</button>
                        </li>
                        <li class="register">
                                <button>Register</button>
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