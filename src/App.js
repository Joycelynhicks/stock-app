import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

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
          <Navbar.Text>
          <a href="#logout">Logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
