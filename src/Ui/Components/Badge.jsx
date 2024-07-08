import '../Styles/Header.css';

function Badge({num, label, corNum, corLabel, corBadge}){


    return(
       <div className="badge" style={ {backgroundColor : corBadge} }>
            <span className='badge-num' style={ {color : corNum} }>
                {num}
            </span>
            <p className='badge-label' style={ {color : corLabel} }>
                {label}
                </p>
       </div>
    );
}

export default Badge;