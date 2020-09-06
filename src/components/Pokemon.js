import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap'
import Cookies from 'universal-cookie';

const baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const cookies = new Cookies();

export default class Pokemon extends Component {
    state = {
        url: '',
        name: '',
        image: null,
        number: -1
    };

    componentDidMount() {
        const name = this.props.name;
        const url = this.props.url;

        this.setState({ name: name });

        const match = /pokemon\//.exec(url);
        if (match) {
            this.setState({ number: url.substring(match.index + 8, url.lenght).replace('/', '') });
            this.number = this.state.number;
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Image src={baseImgUrl + this.state.number + '.png'} fluid />
                <h2>{this.state.name} </h2>

                
            </div>
        );
    }
}


