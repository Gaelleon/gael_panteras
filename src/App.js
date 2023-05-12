import React from "react";
import Objetivos from './Componentes/Objetivos';
import Experiencia from './Componentes/Experiencia';
import Contacto from './Componentes/Contacto';
import Inicio from './Componentes/Inicio';
import Gustos from './Componentes/Gustos';

function App() {
  return (
    <div className="App">
      <div className="Foto">
        <Inicio/>
        <Objetivos />
        <Gustos />
        <Experiencia />
        <Contacto />
      </div>

    </div>
  );
}
export default App;
