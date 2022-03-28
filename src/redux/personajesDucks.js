import axios from "axios";

//constantes
const dataInicial = {
  array: [],
  page: 0,
};

const GET_PERSONAJES_SUCCESS = "GET_PERSONAJES_SUCCESS";
const NEXT_PERSONAJES_SUCCESS = "NEXT_PERSONAJES_SUCCESS";
const PREV_PERSONAJES_SUCCESS = "PREV_PERSONAJES_SUCCESS";
const BUSCAR_PERSONAJES_SUCCES = "BUSCAR_PERSONAJES_SUCCESS";

//reducer
export default function personajesReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_PERSONAJES_SUCCESS:
      return { ...state, array: action.payload };

    case NEXT_PERSONAJES_SUCCESS:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };

    case PREV_PERSONAJES_SUCCESS:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    case BUSCAR_PERSONAJES_SUCCES:
        return{
            ...state,
            array:action.payload.array,
            page:action.payload.page,
        }
    default:
      return state;
  }
}

//acciones

export const getPersonajesAccion = () => async (dispatch, getState) => {
  const { page } = getState().personajes;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    dispatch({
      type: GET_PERSONAJES_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextPersonajesAccion = () => async (dispatch, getState) => {
  const { page } = getState().personajes;
  const next = page + 1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${next}`
    );
    dispatch({
      type: NEXT_PERSONAJES_SUCCESS,
      payload: {
        array: res.data.results,
        page: next,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const prevPersonajesAccion = () => async (dispatch, getState) => {
  const { page } = getState().personajes;
  const prev = page - 1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${prev}`
    );
    dispatch({
      type: PREV_PERSONAJES_SUCCESS,
      payload: {
        array: res.data.results,
        page: prev,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const buscarPersonajesAccion = (name) => async (dispatch, getState) => {
    const { page } = getState().personajes;
    // const {name}= getState().name;
    
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      dispatch({
        type: BUSCAR_PERSONAJES_SUCCES,
        payload: {
          array: res.data.results,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };