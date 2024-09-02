import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import IMC from './IMC';
import IMCResults from './IMCResults';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="bg-dark">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Calculadora de IMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto btn-group btn-group-lg btn-dark">
            <Nav.Link as={Link} to="/imc">Calculadora IMC</Nav.Link>
            <Nav.Link as={Link} to="/imc-results">Resultados IMC</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>

      <Routes>
        <Route path="/imc" element={<IMC />} />
        <Route path="/imc-results" element={<IMCResults />} />
        <Route path="/" element={<IMC />} />
      </Routes>
    </Router>
  );
};

export default App;
