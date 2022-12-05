import React, { Component } from 'react';
import { GenerarTabla } from '../components/genTablaPokeApi';
import { Perfil } from '../components/perfil';
import Petciones from '../services/servicios';

export default class Principal extends Component {

  constructor(props){
    super(props);
    this.state = {
      resPokeApi: [],
    }
  }

  componentDidMount() {
    this.consultaPokeApi();
  }

  consultaPokeApi() {
    Petciones.consultaPokeApi().then(
      res => { 
        this.setState({
          resPokeApi: res.data.results,
        }); 
      }
    ).catch(
      e => { console.log(e); }
    );
  }

  render() {
    return (
      <>
        <div>
          <h1>Principal</h1>
          <Perfil />
        </div>
        <div>
          <GenerarTabla data={this.state.resPokeApi} />
        </div>
      </>
    );
  }
}
