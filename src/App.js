import React from 'react';
import './App.css';
import Welcome from './Containers/Welcome';
import * as ReactBootstrap from "react-bootstrap";
function App() {
  return (
    <div className="App">
      
      <ReactBootstrap.Navbar bg="light" expand="lg">
  <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#welcome-contact">Home</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#link">Link</ReactBootstrap.Nav.Link>
      <ReactBootstrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <ReactBootstrap.NavDropdown.Item href="#welcome-about">Action</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Divider />
        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
      </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
      <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
    </ReactBootstrap.Form>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
<Welcome />
    </div>
  );
  
}

export default App;
