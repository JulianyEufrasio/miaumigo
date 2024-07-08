import React from 'react';
import { useState } from 'react';
import '../Styles/Nav.css';

function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <nav className='navbar'>
            <span className="logo">Miaumigo</span>
            <ul className={`navlinks ${menuOpen ? 'show' : ''}`}>
                <li className='link-item'><a href="#" className="act">Inicio</a></li>
                <li className='link-item'><a href="#">Adote um amigo</a></li>
                <li className='link-item'><a href="#">Divulgue um animal</a></li>
                <li className='link-item'><a href="#">Ajude-nos</a></li>
                <li className='link-item'><a href="#">Sobre nós</a></li>
            </ul>
            <button type="submit" className='btn'>Entrar</button>

            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    );
}

export default Nav;