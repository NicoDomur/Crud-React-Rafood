import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalEditarTabla(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const actualizar = () => {
    console.log(props.data)
  }

  return (
    <>

      <button className='btn-pers' onClick={() => { handleShow(); }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
          <path d="M16 5l3 3"></path>
        </svg>
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#008080", color: "#ffffff" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            Actualizacion de producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form id="FormActual" name="FormActual" className="form-horizontal">

            <div className="form-group div-form">
              <label className="text-left">Nombre del producto</label>
              <div>
                <input className='form-control' type='text' placeholder='Intruduce el nombre del product' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="text-left">Estrés</label>
              <div>
                <input className='form-control' type='text' placeholder='Intruduce el nombre del product' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="text-left">Vulnerabilidad</label>
              <div>
                <input className='form-control' type='text' placeholder='Intruduce el nombre del product' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="col-md-10 text-left">Estatus</label>
              <div>
                <input className='form-control' type='text' placeholder='Intruduce el nombre del product' required />
              </div>
            </div>

            <div className="form-group div-form">
              <label className="col-md-10 text-left">Observaciones</label>
              <div>
                <input className='form-control' type='text' placeholder='Intruduce el nombre del product' required />
              </div>
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <button className="btn-sm btn-pers" onClick={() => { actualizar(); }}>
            Actualizar
          </button>
        </Modal.Footer>
      </Modal>

    </>
  );
}