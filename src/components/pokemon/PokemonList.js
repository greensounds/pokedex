import React, { Component, Fragment } from 'react';
import PokemonCard from './PokemonCard'
import axios from 'axios'

class PokemonList extends Component {
    state = {
        pokemon: null
    }

    async componentDidMount() {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=251&offset=0')
        this.setState({pokemon: res.data['results']})
    }
    render() {
        return (
            <Fragment>
            {this.state.pokemon ? 
                <div className="row">
                    {this.state.pokemon.map((pokemon => (
                        <PokemonCard name={pokemon.name} url={pokemon.url} key={pokemon.name} />
                    )))}
                </div> : <h1>Loading Pokemon...</h1>
            }
            </Fragment>
        );
    }
}

export default PokemonList;