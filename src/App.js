import React from "react";
import Header from './Componentes/Header';
import Foto_Gael from './Assets/Foto_Gael.jpg';

function App() {

  return (
    <div className="App">

      <div className="Foto">
      <img src={Foto_Gael}></img>
      <Header></Header>
      </div>
<body>Gran habilidad y responsabilidad para proyectos, siempre listo para aplicar los conocimientos adquiridos durante la licenciatura con fin de ayudarme a crecer como persona y profesionalmente. </body>
<body1 className="Body1">
          <div className="Contacto">
            <fieldset>
            <legend>CONTACTO</legend>
            <ul>
              <li>TELÉFONO: 5525194728</li>
              <li>DIRECCIÓN:  Calle 4 NO. 320 Col. Del gas Azcapotzalco, 02950, CDMX</li>
              <li>CORREO ELECTRÓNICO: gaelleon677@gmail.com</li>
            </ul>
            </fieldset>
          </div>
</body1>
          <div1 cassName="Aptitudes">
            <fieldset>
            <legend>APTITUDES</legend>
            <ul>
              <li>Honesto</li>
              <li>Creatividad e iniciativa</li>
              <li>Flexibilidad</li>
              <li>Trabajo en equipo</li>
              <li>Resolución de problemas</li>
            </ul>
          </fieldset>
          </div1>
        
       
    </div>
  );
}
export default App;
