import Badge from '../Components/Badge';
import '../Styles/Header.css';

function Header(){

    return(
        <>
            <header>
                <div className="head-text">
                    <div className="h-text">
                        <h2>Encontre seu novo melhor amigo</h2>
                        <p>Seu novo amigo esta te esperando na Miaumigo! Veja nossos animaizinhos e aumente sua família!</p>
                    </div>
                    <div className="badge-container">
                        <Badge 
                        num="+1000" 
                        label="Animais resgatados" 
                        corBadge="var(--red-50)"
                        corNum="var(--red-600)"
                        corLabel="var(--red-600)"
                        />
                        <Badge 
                        num="+900" 
                        label="Animais doados"
                        corBadge="var(--black-50)"
                        corNum="var(--black-500)"
                        corLabel="var(--black-400)"
                        />

                        <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="var(--black-400)" stroke-width="1.5"></circle> <path d="M13.5 9L10.5 12L13.5 15" stroke="var(--black-400)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                        </svg>
                    </div>
                </div>
                <div className="head-img">
                    <img src="../../../public/main-img.svg" alt="" />  
                </div>
            </header>
        </>
    );
}

export default Header;