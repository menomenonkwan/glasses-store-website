import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

const UpdatesModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Subscribe to <span className="fw-bold">SIGHTY</span><span className="fw-light">MIGHTY</span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="fw-light pb-3">Woohoo! You're one step closer to staying up to date on our latest products and deals. Enter your email address below and keep yourself in the loop.</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={handleClose}>Submit</button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Updates() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="bg-white">
      <div className="container">
        <div className="text-center">
          <h2>Follow Us &#38; Subscribe</h2>
          <p className="lead">Stay up-to-date on new arrivals and specials</p>
          <div className="container-sm mb-3">
            <i className="bi bi-pinterest fs-3"></i>
            <i className="bi bi-facebook ms-3 fs-3"></i>
            <i className="bi bi-instagram ms-3 fs-3"></i>
            <i className="bi bi-twitter ms-3 fs-3"></i>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <button className="btn btn-primary my-3" onClick={handleShow}>Subscribe</button>
          </div>
        </div>
      </div>
      <UpdatesModal show={show} handleClose={handleClose} />
    </section>
  );
}
