//import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';


function HeaderPage() {

return (
  <Navbar expand="lg" className="bg-white text-white rounded-md p-3">
    <Container>
      <Navbar.Brand href="/" className="text-black font-bold mx-3 text-xl">Cômodos:</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link 
          href="/sala" 
          className={`text-black hover:text-green-500 mx-3 ${
            location.pathname === "/sala" ? "font-bold text-green-500" : ""
          }`}
        >
          Sala
        </Nav.Link>
        <Nav.Link 
          href="/suite" 
          className={`text-black hover:text-green-500 mx-3 ${
            location.pathname === "/suite" ? "font-bold text-green-500" : ""
          }`}
        >
          Suíte
        </Nav.Link>
        <Nav.Link 
          href="/cozinha" 
          className={`text-black hover:text-green-500 mx-3 ${
            location.pathname === "/cozinha" ? "font-bold text-green-500" : ""
          }`}
        >
          Cozinha
        </Nav.Link>
        <Nav.Link 
          href="/lavanderia" 
          className={`text-black hover:text-green-500 mx-3 ${
            location.pathname === "/lavanderia" ? "font-bold text-green-500" : ""
          }`}
        >
          Lavanderia
        </Nav.Link>
        <Nav.Link 
          href="/report" 
          className={`text-black hover:text-green-500 mx-3 ${
            location.pathname === "/lavanderia" ? "font-bold text-green-500" : ""
          }`}
        >
          Relatorio
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
}

export default HeaderPage;

// function HeaderPage() {
//   return (
//     <Navbar expand="lg" className="bg-white text-white rounded-md p-3">
//       <Container>
//         <Navbar.Brand href="/" className="text-black font-bold mx-3 text-xl">Cômodos:</Navbar.Brand>
//         <Nav className="ml-auto">
//           <Nav.Link href="/sala" className="text-black hover:text-green-500 mx-3">Sala</Nav.Link>
//           <Nav.Link href="/suite" className="text-black hover:text-green-500 mx-3">Suíte</Nav.Link>
//           <Nav.Link href="/cozinha" className="text-black hover:text-green-500 mx-3">Cozinha</Nav.Link>
//           <Nav.Link href="/lavanderia" className="text-black hover:text-green-500 mx-3">Lavanderia</Nav.Link>
//           <Nav.Link href="/report" className="text-black hover:text-green-500 mx-3">Relatório</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default HeaderPage;
