import React from "react";
import { Link } from 'react-router-dom'
import { useDentistContext } from "../Context/Context";

const Card = ({ dentist }) => {
  
  const { state, dispatch } = useDentistContext();
  const findFav = state.favs.find(fav => fav.id === dentist.id);

  const addFav = () => {
    // Aqui iría la lógica para agregar la Card en el localStorage
    if (findFav) {
      alert('Se quito de favoritos');
      dispatch({ type: 'REMOVE_FAV', payload: dentist.id });
    } else {
      alert('Se agrego a favoritos')
      dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    <div className="card">
      {/* En cada card deberán mostrar en name - username y el id */}
      <Link to={`detail/${dentist.id}`}>
        <img src="/images/doctor.jpg" alt="" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        <h4>{dentist.name}</h4>
        <p>{dentist.username}</p>
        <p>ID: {dentist.id}</p>
        {/* No debes olvidar que la Card a su vez servirá como Link hacia la página de detalle */}
      </Link>
      {/* Además, deberán integrar la lógica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        {state.favs.some(fav => fav.id === dentist.id) ? "Remove fav" : "Add fav"}
      </button>
    </div>
  );
};

export default Card;
