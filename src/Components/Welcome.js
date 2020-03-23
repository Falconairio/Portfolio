import React, { Component } from 'react'

export default class Welcome extends Component {
    state = {
        greetings: ['Welcome','Bienvenido','Benvinguda','Willkommen','Welkom','Croeso','Velkommen','Bienvenue','Benvenuto','Ongietorri','Fáilte','Witamy','Vítejte'],
        greetingUsed: 'Welcome'
    }
    selectGreeting = () => {
        let randomNum = Math.floor(Math.random() * this.state.greetings.length);
        let greetingUsed = this.state.greetings[randomNum];
        this.setState({ greetingUsed })
    }
    render() {
        return (
            <div className = 'welcome-container'>
                <h1 onClick = {this.selectGreeting}>{this.state.greetingUsed}</h1>
                <p>You've come upon my portfolio page</p>
                <p>(currently a work in progress!)</p>
            </div>
        )
    }
}
