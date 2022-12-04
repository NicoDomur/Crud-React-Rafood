import axios from "axios";

const consultaPokeApi = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
}

export default {
  consultaPokeApi,
}