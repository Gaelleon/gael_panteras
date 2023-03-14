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

    </div>
  );
}
export default App;
