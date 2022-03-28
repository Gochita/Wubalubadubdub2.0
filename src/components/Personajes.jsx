import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getPersonajesAccion,
  nextPersonajesAccion,
  prevPersonajesAccion,
  buscarPersonajesAccion,
  mostrarFavoritosAccion,
  agregarFavoritosAccion,
} from "../redux/personajesDucks";

import "../style/coolstuf.scss";
import Barrita from "./Barrita";

const Personajes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //personajes
  const personajes = useSelector((store) => store.personajes.array);
  console.log(personajes);
  const [nombres, setNombres] = useState("");
  const handleChange = (e) => {
    setNombres(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombres);
    dispatch(buscarPersonajesAccion(nombres));
  };
  const handleFavoritos = () => {
    navigate("/favoritos")

  };
  const addFavoritos = (personaje) => {
      dispatch(agregarFavoritosAccion(personaje))
  }
  return (
    <div className="container page">
          <Barrita />
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Ingrese nombre de personaje"
          onChange={handleChange}
          className="buscador"
        />
        <button type="submit" className="boton">
          buscar
        </button>
      </form>
      <div className="botones">
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
        <button onClick={handleFavoritos}>❤</button>
      </div>

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
                <button onClick={()=>addFavoritos(item)}>❤</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personajes;
