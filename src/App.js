import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
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
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
