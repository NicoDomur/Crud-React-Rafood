import React, { useEffect, useState } from 'react';
import { GenerarTabla } from '../components/genTablaPokeApi';
import ModalAnadir from '../components/modalAnadir';
import { Perfil } from '../components/perfil';
import Petciones from '../services/servicios';

export default function Principal() {

  const [resPokeApi, setResPokeApi] = useState([]);

  useEffect(() => {
    ConsultaPokeApi();
  }, []);

  function ConsultaPokeApi() {
    Petciones.consultaPokeApi().then(
      res => { 
        setResPokeApi(res.data.results);
      }
    ).catch(
      e => { console.log(e); }
    );
  }
  return (
    <div className='contenedor'>
      <div>
        <h1>Principal</h1>
        <Perfil />
      </div>
      <div>
        <ModalAnadir />
      </div>
      <div>
        <GenerarTabla data={resPokeApi} />
      </div>
    </div>
  );
}