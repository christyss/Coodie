import React from 'react';
import "./SelectButton.scss";

function SelectButton() {
    return (
        <section className="selection-btn">
            <button className="selection-btn__asian">Asian</button>
            <button className="selection-btn__western">Western</button>
            <button className="selection-btn__vegan">Vegan</button>
        </section>
    )
}

export default SelectButton
