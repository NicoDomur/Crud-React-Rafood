import React from 'react';
import ModalEditarTabla from './modalEditarTabla';

export const GenerarTabla = (props) => {

  function TablaBody(lista) {
    const tablaBody = lista.map(
      (reg, index) =>
        <tr key={index}>
          <td className='sm_input center_column'>{index}</td>
          <td className='md_input center_column'>{reg.name}</td>
          <td className='md_input center_column'>{reg.url}</td>
          <td className='sm_input center_column'>
            <ModalEditarTabla data={reg} />
          </td>
          <td className='sm_input center_column'>
            <button className='btn-pers'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </button>
          </td>
        </tr>
    );
    return (
      <>
        {tablaBody}
      </>
    );
  }

  return (
    <>
      <div className="table-responsive">
        <table id="tabla_consulta" className="table table-bordered tabla-admin">

          <thead>
            <tr>
              <th className="sm_input center_column">ID</th>
              <th className="md_input center_column">Nombre</th>
              <th className="md_input center_column">URL</th>
              <th className="sm_input center_column">Editar</th>
              <th className="sm_input center_column">Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {TablaBody(props.data)}
          </tbody>

        </table>
      </div>
    </>
  );
}