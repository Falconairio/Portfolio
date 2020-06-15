import React, { Component } from 'react'

export default class Welcome extends Component {
    state = {
        greetings: ['Bienvenido','Benvinguda','Willkommen','Welkom','Croeso','Velkommen','Bienvenue','Benvenuto','Ongietorri','Fáilte','Witamy','Vítejte'],
        h1classes: "welcomeInitialAnimate",
        greetingUsed: 'Welcome',
        isAnimating: false
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ h1classes: "" }, () => {
                setInterval(() => {
                    this.selectGreeting()
                }, 4000);
            })
        },3000);
    }

    selectGreeting = () => {
        if(!this.state.isAnimating) {
            this.setState({ h1classes: "welcomeAnimate", isAnimating: true}, () => {
                setTimeout(() => {
                    let randomNum = Math.floor(Math.random() * this.state.greetings.length);
                    let greetingUsed = this.state.greetings[randomNum];
                    let greetings = this.state.greetings.filter((greeting,index) => {
                        if(index !== randomNum) {
                            return greeting
                        } else {
                            return null
                        }
                    }).concat(this.state.greetingUsed)
                    setTimeout(() => {
                        this.setState({ greetingUsed }, () => {
                            setTimeout(() => {
                                this.setState({ greetings, greetingUsed, h1classes: "", isAnimating: false })
                            }, 500)
                        })
                    }, 500);
                }, 0);
            })
        }
    }
    render() {
        return (
            <div className = 'welcome-container'>
                <h1 className = {this.state.h1classes}>{this.state.greetingUsed}</h1>
                <p>You've come upon my portfolio page</p>
                <p>(currently a work in progress!)</p>
            </div>
        )
    }
}
