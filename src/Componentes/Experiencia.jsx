import React from 'react';
import '../index.css'
import Col from 'react-bootstrap/Col';

function Experiencia() {
    return (
        <Col className='Parte2'>
            <h1 style={{color: "gold", textAlign: "center"}}>Educación</h1>
            <br />
            <h5 style={{textAlign: "center"}}>Centro Universitario México (2016-2019)</h5>
            <p style={{textAlign: "center"}}>Graduado del área Físico-Matemático de la ingeniería.</p>
            <h5 style={{textAlign: "center"}}>Universidad Panamericana (2020 - En curso)</h5>
            <p style={{textAlign: "center"}}>Cursando una ingeniería en la Tecnología de la Información con esperada fecha de graduación en agosto 2024.</p>
            <br />

            <h1 style={{color: "gold", textAlign: "center"}}>Grupos Estudiantiles</h1>
            <br />
            <h5 style={{textAlign:"center"}}>Panteras Vortex (2022-2023)</h5>
            <p style={{ textAlign: "center"}}>Equipo encargado en desarrollo de videojuegos.</p>
            <h5 style={{textAlign:"center"}}>Panteras Coding (2023-En curso)</h5>
            <p style={{textAlign: "center"}}>Equipo encargado en la creación de paginas web, actualmente miembro del area front-end.</p>
            <br />

            <h1 style={{color: "gold", textAlign: "center"}}>Experiencia Laboral</h1>
            <br />
            <h5 style={{textAlign: "center"}}>AsDeporte STAFF (Mayo/2022 – Actual)</h5>
            <p style={{textAlign: "center"}}>Mi labor principal es el cumplimiento eficaz de las tareas asignadas con resolución de consignas aplicando el pensamiento crítico y colaborando con otros participantes para abordar proyectos en equipo.</p>
            <br />
        </Col>
    );
}
export default Experiencia; 