import React from "react";
import '../index.css'
import Prueba from './Prueba'
import recuadro from "../recuadros";

function Header() {
    return (
        <div className="Titulo">
            <h1>Mi Pagina Personal</h1>
            <body className="Perfil">
                Gran habilidad y responsabilidad para proyectos, siempre listo para aplicar los conocimientos adquiridos durante la licenciatura con fin de ayudarme a crecer como persona y profesionalmente.
                {recuadro.map(content => (
                    <Prueba 
                    key = {content.key}
                    titulo = {content.titulo_recuadro}
                    info1 = {content.informacion1}
                    info2 = {content.informacion2}
                    info3 = {content.informacion3}
                    
                    />
                ))}
            </body>
        </div>
    );
}
export default Header;
