import '../Styles/Nav.css';

function Nav(){
    return(
        < nav className='navbar'>
            <span className="logo">Miaumigo</span>
            <ul className="navlinks">
                <li><a href="#" className="act">Inicio</a></li>
                <li><a href="#">Adote um amigo</a></li>
                <li><a href="#">Divulgue um animal</a></li>
                <li><a href="#">Ajude-nos</a></li>
                <li><a href="#">Sobre nós</a></li>
            </ul>
            <button type="submit" className='btn'>Entrar</button>
        </nav>
    );
}

export default Nav;