import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HeaderPage() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary bg-slate-100  h-fit rounded-xl px-12">
        <Container><Navbar.Brand className='py-4' href="#">Comodos:</Navbar.Brand></Container>
        <Container className=' justify-between flex'>
          <Navbar.Brand className='py-4' href="#">Sala</Navbar.Brand>
          <Navbar.Brand className='py-4' href="#">Suite</Navbar.Brand>
          <Navbar.Brand className='py-4' href="#">Cozinha</Navbar.Brand>
          <Navbar.Brand className='py-4' href="#">Lavanderia</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default HeaderPage;