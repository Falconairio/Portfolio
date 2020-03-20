import React, { Component } from 'react'
import { Link } from "react-scroll";

export default class SideNavbar extends Component {

    state = {
        animate: false
    }

    profileimageeffect = () => {
        this.setState({animate: true})
        setTimeout(() => { this.setState({animate:false}) }, 1000);
    }

    returnImageEffect = () => {
        let random = Math.floor(Math.random() * 3)
        if(random === 2) {
            return 'fade-out'
        } else {
            return 'image-rotate'
        }
    }


    render() {
        const animate = this.state.animate ? this.returnImageEffect() : ''
        const classes = `profile-image ${animate}`


        return (
            <div className = "sidenavbar-container">
                <div className = {classes} onClick = {this.profileimageeffect}/>
                <div className = 'name-title'>
                    <hr/>
                    <h1>Griffith Terry</h1>
                    <p>Junior Software Engineer</p>
                    <hr/>
                </div>
                <div className = 'site-navigation'>
                    <h1>Site Navigation</h1>
                    <div className = 'navigation-options'>
                    <hr/>
                        <ul>
                        <Link 
                            className="navLink"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-105}
                            duration= {400}
                        >About</Link>
                        <Link 
                            className="navLink"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-105}
                            duration= {400}
                        >Projects</Link>
                        <Link 
                            className="navLink"
                            activeClass="active"
                            to="jobs"
                            spy={true}
                            smooth={true}
                            offset={-105}
                            duration= {400}
                        >Jobs</Link>
                        <Link 
                            className="navLink"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-105}
                            duration= {400}
                        >Contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
