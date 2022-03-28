import axios from "axios";

//constantes
const dataInicial = {
  array: [],
};

const GET_PERSONAJES_SUCCESS = "GET_PERSONAJES_SUCCESS";

//reducer
export default function personajesReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_PERSONAJES_SUCCESS:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

//acciones

export const getPersonajesAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    dispatch({
      type: GET_PERSONAJES_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
