import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';


export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Pokemons</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#list">Pokemons</Nav.Link>
                        <Nav.Link href="#myList">My Pokemons</Nav.Link>
                    </Nav>               
                </Navbar.Collapse>
            </Navbar>
        );
    }
}