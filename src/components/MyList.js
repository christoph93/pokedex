import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import Pokemon from './Pokemon';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class MyList extends Component {

    state = {
        currentList : null,
        results: null
    };

    async componentDidMount() {
        this.setState({ currentList: cookies.get('myPokemonList') });
        console.log(this.state.currentList);
        
    }
    
    render() {        
        return (
            <div>
                <p>
                <Button variant="primary" onClick={() => {
                    cookies.set('myPokemonList', '', {path : '/'});
                    }
                } >Clear List</Button>{' '}
                </p>
                {this.state.currentList ?
                <ListGroup>  {this.state.currentList.split(',').map( e =>
                <ListGroup.Item>
                    <Pokemon key={e.name} name={e.name} url={e.url} />
                    </ListGroup.Item>
                )}
                </ListGroup>
                    : <p> </p>}
            </div>
        );
    }

}


