import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import Pokemon from './Pokemon';
import Cookies from 'universal-cookie';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const cookies = new Cookies();

export default class List extends Component {

    state = {
        results: null
    };

    async componentDidMount() {
        const res = await axios.get(url);
        this.setState({ results: res.data['results'] });
    }



    render() {
        return (
            <div>
                {this.state.results ?
                    <ListGroup>  {this.state.results.map(e =>
                        <ListGroup.Item>



                            <Pokemon key={e.name} name={e.name} url={e.url}
                                number={() => {
                                    let match = /pokemon\//.exec(e.url);
                                    if (match) {
                                        this.setState({ number: url.substring(match.index + 8, url.lenght).replace('/', '') });
                                        
                                    }
                                } />

                            <Button variant="primary" onClick={() => {
                                console.log('pokemon number' + this.state.number);
                                if (cookies.get('myPokemonList')) {
                                    let currentList = cookies.get('myPokemonList').split(',');
                                    if (!currentList.includes(this.state.number)) {
                                        currentList.push(this.state.number);
                                    }
                                    cookies.set('myPokemonList', currentList.join(','));
                                    console.log(cookies.get('myPokemonList'))
                                } else {
                                    console.log('no list, creating');
                                    cookies.set('myPokemonList', this.state.number, { path: '/' });
                                }
                            }} >Add to My List</Button>{' '}

                        </ListGroup.Item>
                    )}
                    </ListGroup>
                    : <p> </p>}
            </div>
        );
    }

}


