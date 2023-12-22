import Styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {

   const [character, setCharacter] = useState('')
   const handleChange = (evento) => {
      setCharacter(evento.target.value);
   }


   return (
      <div className={Styles.SearchBar}>
         <input className={Styles.input} placeholder='Buscar Personaje' type='search' value={character} onChange={handleChange} />
         <button className={Styles.Boton} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
