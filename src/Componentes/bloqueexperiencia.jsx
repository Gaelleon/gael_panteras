import React from 'react';
import '../index.css'

function Bloque_contacto(props) {
    return (
        <div style={{ display: 'inline-block' }}>
                <div className='BloqueContactoEstilo'>
                    {props.icon}
                    <h3 className='TituloContacto'>{props.title}</h3>
                </div>
        </div>
    );
}
export default Bloque_contacto; 
