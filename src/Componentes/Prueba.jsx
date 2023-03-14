import react from 'react'
import '../index.css'

function Bloque(props){
   return (<div>
       <fieldset>
           <legend style={{ textAlign: "left" }}>{props.titulo}</legend>
           <ul style = {{textAlign: "left"}}>
               <li>{props.info1}</li>
               <li>{props.info2}</li>
               <li>{props.info3}</li>
           </ul>
       </fieldset>

   </div>); 
}
export default Bloque;