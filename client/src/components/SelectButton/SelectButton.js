import React from 'react';
import "./SelectButton.scss";
import { Link } from 'react-router-dom'



function SelectButton() {
    const getRandomId = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <section className="selection-btn">
            <Link to={`/mix/${getRandomId(1, 8)}`} className="selection-btn__all">Mix</Link>
            <Link to={`/asian/${getRandomId(1, 3)}`} className="selection-btn__asian">Asian</Link>
            <Link to={`/western/${getRandomId(6, 8)}`} className="selection-btn__western">Western</Link>
            <Link to={`/vegan/${getRandomId(4, 5)}`} className="selection-btn__vegan">Vegan</Link>
        </section >
    )
}

export default SelectButton
