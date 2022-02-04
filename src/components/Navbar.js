import { Navbar, Container, Nav } from 'react-bootstrap';

// styles
import './Navbar.css';

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect bg="light" expand="md" className="sticky-top">
      <Container fluid className="px-2">
        <Navbar.Brand href="#home" className="brand fw-bold pb-0 d-flex justify-content-center align-items-center">SIGHTY<span className="fw-normal me-2">MIGHTY </span><i className="bi bi-sunglasses fs-3 p-0 m-0"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-light lead">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
