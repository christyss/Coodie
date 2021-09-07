import React from 'react';
import "./SelectButton.scss";
import { Link } from 'react-router-dom'

function SelectButton() {
    return (
        <section className="selection-btn">
           
            <Link to='/'className="selection-btn__all">Mix</Link>
            <Link to='/asian'className="selection-btn__asian">Asian</Link>
            <Link to='/western' className="selection-btn__western">Western</Link>
            <Link to='/vegan' className="selection-btn__vegan">Vegan</Link>            
        </section >
    )
}

export default SelectButton
