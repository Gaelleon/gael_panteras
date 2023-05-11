import React from "react";
//import Foto_Gael from './Assets/Foto_Gael.jpg';
import Objetivos from './Componentes/Objetivos';
import Experiencia from './Componentes/Experiencia';
import Contacto from './Componentes/Contacto';


function App() {
  return (
    <div className="App">
      <div className="Foto">
        <Objetivos />
        <Experiencia />
        <Contacto />
      </div>

    </div>
  );
}
export default App;
