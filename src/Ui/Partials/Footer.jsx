import '../Styles/Footer.css';

function Footer(){
    return(
        <>
        <footer>
            <div className="f-miaumigo">
                <div className="f-about">
                <span className="logo">Miaumigo</span>
                <p>Miaumigo é uma ONG de resgate e cuidado animal fundada em 2003, que tem como missão cuidar do bem-estar animal ajudando no cuidado e a encontrar novos lares para eles.</p>
                <div className="f-social">
                    <div className="social-icon">
                        <a href="#">
                            <i class='bx bxl-instagram'></i>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="#">
                        <i class='bx bxl-facebook'></i>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="#">
                        <i class='bx bx-share-alt' ></i>
                        </a>
                    </div>
                </div>
                </div>

                <div className="f-links">
                    <div className="container-link">
                        <span>Institucional</span>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Tranparências</a></li>
                            <li><a href="#">Perguntas frequentes</a></li>
                        </ul>
                    </div>
                    <div className="container-link">
                        <span>Como ajudar?</span>
                        <ul>
                            <li><a href="#">Adotar um animal</a></li>
                            <li><a href="#">Apadrinhar um animal</a></li>
                            <li><a href="#">Doar para a ação</a></li>
                            <li><a href="#">Tornar um parceiro</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="f-autor">
                <a href="https://github.com/JulianyEufrasio">
                © Juliany Eufrásio, 2024
                </a>
            </div>
        </footer>
        </>
    );
}

export default Footer;