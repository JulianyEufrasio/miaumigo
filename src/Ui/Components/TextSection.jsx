import '../Styles/Main.css';

function TextSection({title, desc}){

    return(
        <div className="text-sec">
            <h3>{title}</h3>
            <p> {desc}</p>
        </div>
    );
}

export default TextSection;