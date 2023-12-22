import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
  const { detailId } = useParams();
  console.log(useParams())
  const [character, setCharacter] = useState({});

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${detailId}`);
        if (isMounted) {
          const data = response.data;
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        }
      } catch (error) {
        console.error('Error al cargar el personaje:', error);
        window.alert('Error al cargar el personaje');
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [detailId]);

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <img src={character.image} alt={character.name} />
      {/* Otros detalles del personaje */}
    </div>
  );
}
