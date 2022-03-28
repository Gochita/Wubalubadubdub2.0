import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonajesAccion } from "../redux/personajesDucks";

const Personajes = () => {
  const dispatch = useDispatch();
  //personajes
  const personajes = useSelector((store) => store.personajes.array);

  return (
    <div>
      lista de personajes
      <button onClick={() => dispatch(getPersonajesAccion())}>Mostrar</button>
      <ul>
          {
              personajes.map(item =>(
                  <li key={item.name}>{item.name}</li>
              ))
          }
      </ul>
    </div>
  );
};

export default Personajes;
