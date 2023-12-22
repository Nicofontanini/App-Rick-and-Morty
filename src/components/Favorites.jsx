import React, {useState} from 'react';
import styledFavorites from './Favorites.module.css'
import { connect, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { orderCards, filterCards } from '../redux/actions';
// Importa tu acción para remover de favoritos
import { removeFav } from '../redux/actions';

function Favorites({ myFavorites, removeFromFavorites }) {
  const handleRemoveFromFavorites = (id) => {
    // Dispatch la acción para remover de favoritos
    removeFromFavorites(id);
  };

  const dispatch = useDispatch();
 
  
  // eslint-disable-next-line no-unused-vars
  const [aux, setAux] = useState(false);
  const handleOrder = (e) => {
    setAux(true);
    dispatch(orderCards(e.target.value));
  }

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  }

  return (
    <div>
      <h3>My Favorites</h3>
      <div className={styledFavorites.containerCard}>

        <div>
          <select onChange={handleOrder}>
            <option value="order" disabled='disabled'>Order By</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>

        <div>
          <select onChange={handleFilter}>
            <option value="order" disabled='disabled'>Filter By</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
      </div>

      {myFavorites.map((favorite) => (
        <Card
          key={favorite.id}
          id={favorite.id}
          name={favorite.name}
          species={favorite.species}
          gender={favorite.gender}
          image={favorite.image}
          onClose={() => handleRemoveFromFavorites(favorite.id)}
        />
      ))}
    </div>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

