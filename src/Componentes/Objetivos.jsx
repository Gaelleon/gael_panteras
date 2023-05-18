import React from "react";
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Objetivos(){
    return(
        <Row className="Parte1">
            <Col className="Datos">
                <label style={{color:"gray"}}>Sobre mí:</label>
                <h1>Mi misión es ser desarrollador web <h1 style={{color:"gold", display: "inline" }}>FullStack.</h1></h1>
                <br />
                <p style={{color:"gray"}}>Soy una persona con gran habilidad y responsabilidad para proyectos, siempre listo para aplicar los conocimientos adquiridos durante la
                    licenciatura con fin de ayudarme a crecer como persona y profesionalmente.
                </p>
            </Col>
            <Col className="Barras">
                <label style={{ color: "gray"}}>Conocimientos:</label>
                <br />
                <label style={{ color: "white" }}>HTML</label>
                <div className="Barra">
                    <div className="Progreso_HTML"></div>
                </div>
                <label style={{ color: "white" }}>Swift</label>
                <div className="Barra">
                    <div className="Progreso_Swift"></div>
                </div>
                <label style={{ color: "white" }}>Python</label>
                <div className="Barra">
                    <div className="Progreso_Python"></div>
                </div>
                <label style={{ color: "white" }}>C++</label>
                <div className="Barra">
                    <div className="Progreso_C"></div>
                </div>
                <label style={{ color: "white" }}>JavaScript</label>
                <div className="Barra">
                    <div className="Progreso_JavaScript"></div>
                </div>
            </Col>
        </Row>
    );

}

export default Objetivos;