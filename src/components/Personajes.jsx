import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPersonajesAccion,
  nextPersonajesAccion,
  prevPersonajesAccion,
} from "../redux/personajesDucks";

import "../style/coolstuf.scss"

const Personajes = () => {
  const dispatch = useDispatch();
  //personajes
  const personajes = useSelector((store) => store.personajes.array);

  return (
    <div className="container">
      <button
        onClick={() => dispatch(getPersonajesAccion())}
        className="btn btn-dark"
      >
        Mostrar
      </button>
      <button
        onClick={() => dispatch(prevPersonajesAccion())}
        className="btn btn-dark"
      >
        ◀
      </button>
      <button
        onClick={() => dispatch(nextPersonajesAccion())}
        className="btn btn-dark"
      >
        ▶
      </button>

      <div className="row">

        {personajes.map((item) => (
          <div key={item.id} className="col-md-4 mb-2">
            <div className="card">
              <img
                key={item.id}
                src={item.image}
                alt={`imagen-${item.name}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>Especie: {item.species}</p>
                <p>Genero: {item.gender}</p>
                <p>Ubicacion: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Personajes;
