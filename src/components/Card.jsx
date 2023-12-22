import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Styles from './Card.module.css';
import { addFav, removeFav } from '../redux/actions';

function Card({ id, name, species, gender, image, onClose, isFav, addFav, removeFav, myFavorites }) {
  const [localIsFav, setLocalIsFav] = useState(isFav);

  useEffect(() => {
    setLocalIsFav(isFav);
  }, [isFav]);

  useEffect(() => {
    // Verificar si el personaje está en la lista de favoritos y actualizar el estado local
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setLocalIsFav(true);
      }
    });
  }, [myFavorites, id]);

  const handleToggleFav = () => {
    if (localIsFav) {
      setLocalIsFav(false);
      removeFav(id);
    } else {
      setLocalIsFav(true);
      addFav({ id, name, species, gender, image });
    }
  };

  return (
    <div className={Styles.Carta}>
    <div className={Styles.Fav}>
      {localIsFav ? (
        <button onClick={handleToggleFav}>❤️</button>
      ) : (
        <button onClick={handleToggleFav}>🤍</button>
      )}</div>
      <button className={Styles.Boton} onClick={onClose}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={Styles.Name}>{name}</h2>
      </Link>
      <img className={Styles.Img} src={image} alt={name} />
      <h2>
        {species} {gender}
      </h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return {
    isFav: state.myFavorites.some((personaje) => personaje.id === id),
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, { addFav, removeFav })(Card);


