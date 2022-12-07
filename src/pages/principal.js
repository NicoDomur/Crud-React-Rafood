import React, { useEffect, useState } from 'react';
import { GenerarTabla } from '../components/genTablaPokeApi';
import ModalAnadir from '../components/modalAnadir';
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
        <h1 className='titulo'>Principal</h1>
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