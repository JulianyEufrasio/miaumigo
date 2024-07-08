import '../Styles/Card.css';


function CardAnimal({
    petImg,
    petName,
    petLocal
}){

    return(
        <>
            <div className="card">
                <img src={petImg} alt="" className="petImg" />

                <div className="pet-info">
                    <span> {petName} </span>
                    <p>{petLocal}</p>
                </div>
            </div>
        </>
    );
}


export default CardAnimal;