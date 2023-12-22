import React from 'react';
import styledAbout from './About.module.css';

export default function About() {
    return (
        <div className={styledAbout.container}>
            <h1>Soy Nico!</h1>
            <h2>FullStack Developer</h2>
            <h3>Aplicacion Desarrollada Con:</h3>
            <h4>Javascript | ReactJs | Css | NodeJs | Redux</h4>
        </div>
    );
}