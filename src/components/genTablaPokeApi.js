import React from 'react';

export const GenerarTabla = (props) => {

  function TablaBody(lista) {
    const tablaBody = lista.map(
      (reg, index) =>
        <tr key={index}>
          <td className='center_column'>{index}</td>
          <td className='center_column'>{reg.name}</td>
          <td className='center_column'>{reg.url}</td>
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
              <th className="sm_input center_column">Nombre</th>
              <th className="md_input center_column">URL</th>
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