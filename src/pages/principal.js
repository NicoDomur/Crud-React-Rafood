import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
//import { GenerarTabla } from '../components/genTablaPokeApi';
//import { GenerarTablaComida } from '../components/tablas/genTablaComida';
//import ModalAnadir from '../components/tablas/modalAnadir';
import { useAuth0 } from '@auth0/auth0-react';
import Peticiones from '../services/servicios';
import alertaPeque from '../components/swal-pequeno';

export default function Principal() {

  const { user } = useAuth0();
  const [resConsComida, setResConsComida] = useState([]);

  const [idComida, setIdComida] = useState();

  const [mostrarMA, setmostrarMA] = useState(false);
  const handleCerrarMA = () => setmostrarMA(false);
  const handleMostrarMA = () => setmostrarMA(true);

  const [mostrarME, setmostrarME] = useState(false);
  const handleCerrarME = () => setmostrarME(false);
  const handleMostrarME = () => setmostrarME(true);

  useEffect(() => {
    ConsultaComida();
  }, []);

  function ConsultaComida() {
    Peticiones.consultaComida(user.name).then(
      res => {
        console.log(res.data)
        setResConsComida(res.data);
      }
    );
  }

  function anadir() {
    console.log(resConsComida.fk_idtiendas);
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const categoria = document.getElementById('categoria').value;
    const porcion = document.getElementById('porcion').value;
    const imagen = document.getElementById('imagen').value;
    const precio = document.getElementById('precio').value;
    const json = {
      "nombre": nombre,
      "descripcion": descripcion,
      "porcion": parseInt(porcion),
      "categoria": categoria,
      "precio": parseInt(precio),
      "imagen": imagen,
      "fkTienda": resConsComida[0].fk_idtiendas,
    };
    console.log(json);
    Peticiones.anadirComida(json).then(
      response => {
        console.log(response, "Logrado");
        handleCerrarMA();
        ConsultaComida();
        alertaPeque();
      }
    ).catch(
      e => { console.log(e); }
    );
  }

  function editar () {
    //const idComida = idComida;
    
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const categoria = document.getElementById('categoria').value;
    const porcion = document.getElementById('porcion').value;
    const imagen = document.getElementById('imagen').value;
    const precio = document.getElementById('precio').value;
    const json = {
      "nombre": nombre,
      "descripcion": descripcion,
      "porcion": parseInt(porcion),
      "categoria": categoria,
      "precio": parseInt(precio),
      "imagen": imagen,
      "idcomida": idComida,
    };
    console.log(json);
    Peticiones.editarComida(json).then(
      () => {
        handleCerrarME();
        ConsultaComida();
        alertaPeque();
      }
    ).catch(
      e => { console.log(e); }
    );
  }

  function eliminar (id) {
    console.log(id);
    Peticiones.eliminarComida(id).then(
      response => {
        ConsultaComida();
        alertaPeque();
      }
    ).catch(
      e => { console.log(e); }
    );
  }

  function TablaBody(lista) {
    const tablaBody = lista.map(
      (reg, index) =>
        <tr key={index}>
          <td className='sm_input center_column'>{index}</td>
          <td className='md_input center_column'>{reg.nombre_comida}</td>
          <td className='md_input center_column'>{reg.descripcion_ingredientes}</td>
          <td className='md_input center_column'>{reg.categoria}</td>
          <td className='sm_input center_column'>{reg.porcion}g</td>
          <td className='sm_input center_column'>${reg.precio}</td>
          <td className='sm_input center_column'>
            <button className='btn-pers' onClick={() => { handleMostrarME(); setIdComida(reg.idcomida); }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                <path d="M16 5l3 3"></path>
              </svg>
            </button>
          </td>
          <td className='sm_input center_column'>
            <button className='btn-pers' onClick={() => { eliminar(reg.idcomida); }}>
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
    <div className='contenedor'>
      <div>
        <h1 className='titulo'>Principal</h1>
      </div>

      <div>
        <div className="gap-2 d-md-flex justify-content-md-end">
          <button className='btn-pers btn-lg' onClick={() => { handleMostrarMA(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
        <div style={{ margin: "10px" }} />
      </div>

      <div>
        <div className="table-responsive">
          <table id="tabla_consulta" className="table table-bordered tabla-admin">

            <thead>
              <tr>
                <th className="sm_input center_column">ID</th>
                <th className="md_input center_column">Comida</th>
                <th className="md_input center_column">Ingredientes</th>
                <th className="md_input center_column">Categoria</th>
                <th className="sm_input center_column">Porcion</th>
                <th className="sm_input center_column">Precio</th>
                <th className="sm_input center_column">Editar</th>
                <th className="sm_input center_column">Eliminar</th>
              </tr>
            </thead>

            <tbody>
              {TablaBody(resConsComida)}
            </tbody>

          </table>
        </div>
      </div>


      <Modal show={mostrarMA} onHide={handleCerrarMA} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#008080", color: "#ffffff" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            A&ntilde;adir producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form id="FormActual" name="FormActual" className="form-horizontal">

            <div className="form-group div-form">
              <label className="text-left">Nombre del producto</label>
              <div>
                <input id='nombre' className='form-control' type='text' placeholder='Intruduce el nombre del producto' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="text-left">Descripci&oacute;n de ingredientes</label>
              <div>
                <input id='descripcion' className='form-control' type='text' placeholder='Una descripcion de lo que contiene' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="text-left">Categor&iacute;a</label>
              <div>
                <input id='categoria' className='form-control' type='text' placeholder='Intruduce la categoria' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="col-md-10 text-left">Porci&oacute;n</label>
              <div>
                <input id='porcion' className='form-control' type='number' placeholder='Porcion en gramos' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="col-md-10 text-left">Precio</label>
              <div>
                <input id='precio' className='form-control' type='number' placeholder='Precio MXN' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="col-md-10 text-left">Imagen</label>
              <div>
                <input id='imagen' className='form-control' type='url' placeholder='Insertar URL de imagen' required />
              </div>
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <button className="btn-sm btn-pers" onClick={() => { anadir(); }}>
            Añadir
          </button>
        </Modal.Footer>
      </Modal>


      <Modal show={mostrarME} onHide={handleCerrarME} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#008080", color: "#ffffff" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            Editar producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form id="FormActual" name="FormActual" className="form-horizontal">

            <div className="form-group div-form">
              <label className="text-left">Nombre del producto</label>
              <div>
                <input id='nombre' className='form-control' type='text' placeholder='Intruduce el nombre del producto' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="text-left">Descripci&oacute;n de ingredientes</label>
              <div>
                <input id='descripcion' className='form-control' type='text' placeholder='Una descripcion de lo que contiene' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="text-left">Categor&iacute;a</label>
              <div>
                <input id='categoria' className='form-control' type='text' placeholder='Intruduce la categoria' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="col-md-10 text-left">Porci&oacute;n</label>
              <div>
                <input id='porcion' className='form-control' type='number' placeholder='Porcion en gramos' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="col-md-10 text-left">Precio</label>
              <div>
                <input id='precio' className='form-control' type='number' placeholder='Precio MXN' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="col-md-10 text-left">Imagen</label>
              <div>
                <input id='imagen' className='form-control' type='url' placeholder='Insertar URL de imagen' required />
              </div>
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <button className="btn-sm btn-pers" onClick={() => { editar(); }}>
            Editar
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  );
  //<GenerarTablaComida data={resConsComida} />
}