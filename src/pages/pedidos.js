import React, { useEffect, useState } from "react";
import Peticiones from "../services/servicios";
import alertaPeque from "../components/swal-pequeno";
import { useAuth0 } from "@auth0/auth0-react";

export default function Pedidos() {
  const { user } = useAuth0();
  const [resConspedidos, setResConsPedidos] = useState([]);


  useEffect(() => {
    consultaPedidos();
    const interval = setInterval(() => {
      consultaPedidos();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  function consultaPedidos() {
    Peticiones.consultaPedidos(user.name).then((res) => {
      setResConsPedidos(res.data);
    });
  }

  function eliminar(idpedidos) {
    Peticiones.eliminarPedidos(idpedidos)
      .then(() => {
        consultaPedidos();
        alertaPeque({texto: 'La comida ya fue entrega.', icono: 'success'});
      })
      .catch((e) => {
        alertaPeque({texto: 'Hubo un error: ' + e, icono: 'error'});
      });
  }

  function TablaBody(lista) {
    const tablaBody = lista.map((reg, index) => (
      <tr key={index}>
        <td className="sm_input center_column">{reg.idpedidos}</td>
        <td className="sm_input center_column">{reg.cantidad}</td>
        <td className="md_input center_column">{reg.nombre_comida}</td>
        <td className="md_input center_column">{reg.comentarios_extra}</td>
        <td className="md_input center_column">{new Date(reg.fecha_entrega).toLocaleString()}</td>
        <td className="md_input center_column">{reg.nombre_usuario}</td>
        <td className="sm_input center_column">${reg.costo_total}</td>

        <td className="sm_input center_column">
          <button
            className="btn-pers"
            onClick={() => {
              eliminar(reg.idpedidos);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </button>
        </td>
      </tr>
    ));
    return <>{tablaBody}</>;
  }

  return (
    <div className="contenedor">
      <div>
        <h1 className="titulo">Pedidos</h1>
      </div>

      <div>
        <div className="gap-2 d-md-flex justify-content-md-end">

        </div>
        <div style={{ margin: "10px" }} />
      </div>

      <div>
        <div className="table-responsive">
          <table
            id="tabla_consulta"
            className="table table-bordered tabla-admin"
          >
            <thead>
              <tr>
                <th className="sm_input center_column">Id Pedido</th>
                <th className="sm_input center_column">Cantidad</th>
                <th className="md_input center_column">Comida</th>
                <th className="md_input center_column">Comentarios extra</th>
                <th className="md_input center_column">Fecha de entrega</th>
                <th className="md_input center_column">Nombre orden</th>
                <th className="sm_input center_column">Costo total</th>
                <th className="sm_input center_column">¡Listo!</th>
              </tr>
            </thead>

            <tbody>{TablaBody(resConspedidos)}</tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
