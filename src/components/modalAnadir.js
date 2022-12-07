import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalAnadir(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const actualizar = () => {
    console.log(props.data)
  }

  return (
    <>
      <div className="gap-2 d-md-flex justify-content-md-end">
        <button className='btn-pers btn-lg' onClick={() => { handleShow(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>

      <div style={{ margin: "10px" }} />

      <Modal show={show} onHide={handleClose} size="lg">
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
            Añadir
          </button>
        </Modal.Footer>
      </Modal>

    </>
  );
}