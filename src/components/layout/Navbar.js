import React, { Component } from 'react'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-darkbg-dark fixed-top">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0 alignitems-center" href="">Pokedex</a>
                </nav>
            </div>
        )
    }
}
