import '../Styles/Main.css';

import TextSection from '../Components/TextSection';
import CardAnimal from '../Components/CardAnimal';

function Main(){

    return(
        <>
            <main>
                <TextSection
                title="Peludos para adoção"
                desc="Animais recém chegados na Miaumigos"
                />

                <div className="card-container">
                    <CardAnimal
                    petImg="/public/tobby.png"
                    petName="Tobby"
                    petLocal="Lorena, São Paulo"
                    />
                    <CardAnimal
                    petImg="/public/fuffy.png"
                    petName="Fuffly"
                    petLocal="São Paulo, São Paulo"
                    />
                    <CardAnimal
                    petImg="/public/marley.png"
                    petName="Marley"
                    petLocal="Belo Horizonte, Minas Gerais"
                    />
                    <CardAnimal
                    petImg="/public/luna.png"
                    petName="Luna"
                    petLocal="Rio de Janeiro, Rio de Janeiro"
                    />
                    <CardAnimal
                    petImg="/public/marco.png"
                    petName="Marco"
                    petLocal="Guarulhos, São Paulo"
                    />
                    <CardAnimal
                    petImg="/public/chico.png"
                    petName="Chico"
                    petLocal="Passa Quatro, Minas Gerais"
                    />
                </div>
            </main>
        </>
    );
}

export default Main;