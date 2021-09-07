import React from 'react';
import "./SelectButton.scss";
import { Link } from 'react-router-dom'

function SelectButton() {
    return (
        <section className="selection-btn">
            <button className="selection-btn__all">Mix</button>
            <Link to='/asian'>
                <button className="selection-btn__asian">Asian</button>
            </Link>
            <button className="selection-btn__western">Western</button>
            <button className="selection-btn__vegan">Vegan</button>
        </section >
    )
}

export default SelectButton
