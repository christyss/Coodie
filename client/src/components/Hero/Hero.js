import React from 'react';
import './Hero.scss';

function Hero() {
    return (
        <section className="hero">
            <h2 className="hero-slogan">When you don't know what to eat ... <br /><span className="hero-slogan--large">We are here to help!</span> </h2>
            <h3 className="hero-slogan--small">Pick any cuisine you want below, <br />We will shuffle for you.</h3>
        </section>
    )
}

export default Hero
