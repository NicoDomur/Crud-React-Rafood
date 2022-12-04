import React, { Component } from 'react'
import { Perfil } from '../components/perfil';
import Petciones from '../services/servicios'

export default class Principal extends Component {

  consultaPokeApi() {
    Petciones.consultaPokeApi().then(
      res =>{console.log(res.data.results);}
    ).catch(
      e => {console.log(e);}
    );
  }

  render() {
    return (
      <>
        <h1>Principal</h1>
        <button onClick={() => {this.consultaPokeApi();}}>PokeApi</button>
        <Perfil />
      </>
    );
  }
}
