import { FETCH_CHARACTER, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE } from '../actions';

const initialState = {
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action)
  switch (action.type) {
    case FETCH_CHARACTER:
      return {
        ...state,
        fetching: true
      }
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      }
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
