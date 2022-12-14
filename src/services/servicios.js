import axios from "axios";

const consultaPokeApi = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
}

const consultaComida = (nombre) => {
  return axios.get('http://192.168.184.1:8083/comidareact/' + nombre);
}

const anadirComida = (jsonDetalles) => {
  return axios.post('http://192.168.184.1:8083/anadirreact', jsonDetalles);
}

const eliminarComida = (id) => {
  return axios.delete('http://192.168.184.1:8083/eliminarreact/' + id);
}

const editarComida = (jsonEditar) => {
  return axios.put('http://192.168.184.1:8083/editarreact', jsonEditar);
}

export default {
  consultaPokeApi,
  consultaComida,
  anadirComida,
  eliminarComida,
  editarComida
}