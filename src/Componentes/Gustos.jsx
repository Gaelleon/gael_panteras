import React from 'react';
import '../index.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import FotoGael from '../Assets/img/FotoGael.jpg'
 
 function Gustos(){
    return(
        <Row className='Gustos'>
            <Col className='Lista' style={{ display: "inline" }}>
                <div>
                    <h2>Me <h2 style={{ color: "gold", display: "inline" }}>gusta</h2> hacer las cosas fáciles y divertidas.</h2>
                    <br />
                    <ul className='ListaEstilo'>
                        <p>- Desarrollo</p> 
                        <p>- Diseño</p> 
                        <p>- Marketing</p> 
                    </ul>
                </div>
            </Col>
            
            <Col className='Foto d-none d-sm-block'>
                <div>
                    <Image fluid src={FotoGael} />
                </div>
            </Col>
        </Row>
    );
 }
 export default Gustos;