import React from 'react';
import '../index.css'
import bloque_experiencia from '../bloqueexperiencia';
import Bloque_experiencia from './bloqueexperiencia';
import Col from 'react-bootstrap/Col';

function Contacto() {
    return(
            <Col className='Parte3'>
                {bloque_experiencia.map(content => (
                    <Bloque_experiencia
                        key={content.key}
                        icon={content.iconBloque}
                        title={content.titleBloque}
                    />
                ))}
            </Col>
    );
}
export default Contacto; 