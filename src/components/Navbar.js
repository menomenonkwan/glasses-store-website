import { Navbar, Container, Nav } from 'react-bootstrap';

// styles
import './Navbar.css';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="md">
       {/* fixed="top" */}
      <Container fluid>
        <Navbar.Brand href="#home" className="brand fw-bold pb-0 d-flex justify-content-center align-items-center">GLASS<span className="fw-normal me-2">HOLE </span><i class="bi bi-sunglasses fs-3 p-0 m-0"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
