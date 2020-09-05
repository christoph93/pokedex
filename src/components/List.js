import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';



export default class List extends Component {

    state = {
        response: ''
    };

    async componentDidMount() {
      this.setState(await axios.get(url));
    }

    render() {
        return (
            <div>
                <h1> {url}</h1>                                
            </div>
            
        );
    }

}


