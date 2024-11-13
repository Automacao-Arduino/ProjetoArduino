import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function HeaderPage() {
  return (
    <Navbar expand="lg" className="bg-white text-white rounded-md p-3">
      <Container>
        <Navbar.Brand href="#" className="text-black font-bold mx-3 text-xl">Comodos:</Navbar.Brand>
          <Nav.Link href="#" className="text-black hover:text-green-500 mx-3">Sala</Nav.Link>
          <Nav.Link href="#" className="text-black hover:text-green-500 mx-3">Suite</Nav.Link>
          <Nav.Link href="#" className="text-black hover:text-green-500 mx-3">Cozinha</Nav.Link>
          <Nav.Link href="#" className="text-black hover:text-green-500 mx-3">Lavanderia</Nav.Link>        
      </Container>
    </Navbar>
  );
}

export default HeaderPage;