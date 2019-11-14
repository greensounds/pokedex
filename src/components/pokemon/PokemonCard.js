import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import spinner from '../pokemon/spinner.gif'

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`

const Card = styled.div` 
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0, 0, 0, 0.25);
    transition: all 0.3s cubic-bezier(0.25, 0.8, cubic-bezier(0.25, 0.46, 0.45, 0.94), 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
`

class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    }
    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name, imageUrl, pokemonIndex
        })
    }
    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                    <Card className="card">
                        <h5 className="card-header" >{this.state.pokemonIndex}</h5>
                        {this.state.imageLoading ? (
                            <img className="card-img-top rounded mx-auto d-block mt-2" src={spinner} alt="" style={{width: '5em', height: '5em'}}/>
                        ) : null}
                        <Sprite 
                            className="card-img-top rounded mx-auto mt-2" 
                            src={this.state.imageUrl} 
                            onLoad={() => this.setState({imageLoading: false})}
                            onError={() => this.setState({toManyRequests: true})}
                            style={
                                this.state.toManyRequests ? {display: 'none'} : 
                                this.state.imageLoading ? null : {display: 'block'}   
                            }
                        />
                        {this.state.toManyRequests ? <h6 className="mx-auto"><span className="badge badge-danger mt-2">To Many Requests</span></h6>  : null}
                        <div className="card-body mx-auto">
                            <h6 className="card-title">
                                {this.state.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toLocaleUpperCase() + letter.substring(1)).join(' ')}
                            </h6>
                        </div>
                    </Card>
                </Link>
            </div>
        );
    }
}

export default PokemonCard;