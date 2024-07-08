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
                    <CardAnimal/>
                </div>
            </main>
        </>
    );
}

export default Main;