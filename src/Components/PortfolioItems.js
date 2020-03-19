import React, { Component } from 'react'
import Welcome from './Welcome'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Jobs from './Jobs'

export default class PortfolioItems extends Component {
    render() {
        return (
            <div className = 'portfolio-items'>
                <Welcome/>
                <About/>
                <Projects/>
                <Jobs/>
                <Contact/>
            </div>
        )
    }
}
