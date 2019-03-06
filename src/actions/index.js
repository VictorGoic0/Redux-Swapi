import axios from "axios";
export const FETCH_CHARACTER = "FETCH_CHARACTER";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

export const getCharacter = () => dispatch => {
  dispatch({ type: FETCH_CHARACTER });
  axios.get("https://swapi.co/api/people/")
  .then(res => {
    dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results})
    console.log(res)
  })
  .catch(err => {
    dispatch({ type: FETCH_CHARACTER_FAILURE, payload: err.response.data.error.message})
  })
}
