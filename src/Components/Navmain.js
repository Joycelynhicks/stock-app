import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap';


function Navmain() {
  return (
    <div className="Navmain">
      
      <Navbar>
        <Navbar.Brand href="#home">Stock App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
        <Nav.Link href="#logout">Logout</Nav.Link>
        </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Navmain;


