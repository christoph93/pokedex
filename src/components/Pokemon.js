import React, { Component } from 'react';



const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export default class Pokemon extends Component {
    state = {
        number: -1,
        name: '',
        image: ''
    };  
}


const pokemonData = await Axios.get(`baseUrl/${number}`);


