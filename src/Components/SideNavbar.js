import React, { Component } from 'react'
import { Link } from "react-scroll";

export default class SideNavbar extends Component {


    render() {
        return (
            <div className = "sidenavbar-container">
                <div className = "profile-image" />
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
