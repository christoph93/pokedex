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

    //pull pokemon list from api
    async componentDidMount() {
        const res = await axios.get(url);
        this.setState({ results: res.data['results'] });
    }

    //extract pokemon number from the URL
    getNumberFromUrl(url){        
        const match = /pokemon\//.exec(url);
        if (match) {            
            return url.substring(match.index + 8, url.lenght).replace('/', '');            
        }
        
    }

    render() {
        //set cookies to hold the pokemon list
        if(!cookies.get('myPokemonList')){
            cookies.set('myPokemonList', [], {path:'/'});
        }
        return (
            <div>
                {this.state.results ?
                    <ListGroup>  {this.state.results.map(e =>
                        <ListGroup.Item key={e.name}>
                            <Pokemon                             
                            name={e.name} 
                            url={e.url}
                            number={this.getNumberFromUrl(e.url)} />

                            {/* button to add pokemon to list */}                            
                            <Button variant="primary" onClick={() => {
                                var currentCookie = cookies.get('myPokemonList');
                                if(!currentCookie.includes(this.getNumberFromUrl(e.url))){
                                    currentCookie.push(this.getNumberFromUrl(e.url))
                                } else {
                                    console.log('repeated pokemon in list')
                                }
                                cookies.set('myPokemonList', currentCookie);
                                console.log(cookies.get('myPokemonList'));

                            }} >Add to My List</Button>{' '}

                        </ListGroup.Item>
                    )}
                    </ListGroup>
                    : <p> </p>}
            </div>
        );
    }

}


