import React from 'react';
import "./SelectButton.scss";
import { Link } from 'react-router-dom'

function SelectButton() {
    return (
        <section className="selection-btn">
            <Link to='/'>
                <button className="selection-btn__all">Mix</button>
            </Link>
            <Link to='/asian'>
                <button className="selection-btn__asian">Asian</button>
            </Link>
            <Link to='/western'>
                <button className="selection-btn__western">Western</button>
            </Link>
            <Link to='/vegan'>
                <button className="selection-btn__vegan">Vegan</button>
            </Link>            
        </section >
    )
}

export default SelectButton
