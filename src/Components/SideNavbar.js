import React, { Component } from 'react'
import { Link } from "react-scroll";

export default class SideNavbar extends Component {

    state = {
        animate: false,
        titles: ["Web Developer", "Programmer", "Software Engineer"],
        titleSelect: 0
    }

    profileimageeffect = () => {
        if(!this.state.animate) {
            this.setState({animate: true})
            setTimeout(() => { this.setState({animate:false}) }, 1000);
        }
    }

    returnImageEffect = () => {
        let random = Math.floor(Math.random() * 9)
        if(random === 8) {
            return 'spiral'
        } else if(random === 7) {
            return 'skew'
        } else if(random === 6) {
            return 'huerotate'
        } else if(random === 5) {
            return 'blur'
        } else if(random === 4) {
            return 'invert'
        } else if(random === 3) {
            return 'saturate'
        } else if (random === 2) {
            return 'fade-out'
        } else if(random === 1) {
            return 'image-rotate'
        } else {
            return 'background-zoom'
        }
    }

    changeTitle = () => {
        let titleSelect = this.state.titleSelect;
        if(titleSelect !== 2) {
            this.setState({ titleSelect: titleSelect + 1 })
        } else {
            this.setState({ titleSelect: 0 })
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
                    <p onClick = {this.changeTitle}>Junior {this.state.titles[this.state.titleSelect]}</p>
                    <hr/>
                </div>
                <div className = 'site-navigation'>
                    <h1>Site Navigation</h1>
                    <div className = 'navigation-options'>
                    <hr/>
                        <ul>
                        <div className = 'linkcontainer'>
                            <Link 
                                className="navLink"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-105}
                                duration= {400}
                            >About</Link>
                        </div>
                        <div className = 'linkcontainer'>
                            <Link 
                                className="navLink"
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                delay={-10}
                                offset={-105}
                                duration= {400}
                            >Projects</Link>
                        </div>
                        <div className = 'linkcontainer'>
                            <Link 
                                className="navLink"
                                activeClass="active"
                                to="jobs"
                                spy={true}
                                smooth={true}
                                offset={-105}
                                duration= {400}
                            >Jobs</Link>
                        </div>
                        <div className = 'linkcontainer'>
                            <Link 
                                className="navLink"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-105}
                                duration= {400}
                            >Contact</Link>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
