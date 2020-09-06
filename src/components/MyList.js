import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import Pokemon from './Pokemon';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class MyList extends Component {

    state = {
        currentList : null,
        results: null
    };


    
    render() {        
        return (
            <div>
                <p>
                <Button variant="primary" onClick={() => {
                    cookies.set('myPokemonList', []);
                    }
                } >Clear List</Button>{' '}
                </p>                
                 <ListGroup>  {cookies.get('myPokemonList').map(e =>
                        <ListGroup.Item key={e}>
                            <Pokemon 
                            key={e}
                            number={e} />

                            <Button variant="danger" onClick={() => {
                                var currentCookie = cookies.get('myPokemonList');
                                currentCookie.splice(currentCookie.indexOf(e),1);
                                cookies.set('myPokemonList', currentCookie);
                                this.setState({currentList : currentCookie});
                            }} 
                            >Remove From List</Button>{' '}

                        </ListGroup.Item>
                    )} 
                </ListGroup>
                    
            </div>
        );
    }

}


