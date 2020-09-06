import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
const baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


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
        const number = this.props.number;

        this.setState({ name: name, number: number, url: url});

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


