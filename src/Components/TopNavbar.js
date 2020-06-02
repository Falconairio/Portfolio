import React, { Component } from 'react'
import { Link } from "react-scroll";

export default class TopNavbar extends Component {
    render() {
        return (
            <div className = "topnav-container">
                <Link 
                            className="navLink"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-105}
                            duration= {400}
                        >About</Link>
                        <vr/>
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
                        <vr/>
                        {/* <Link 
                            className="navLink"
                            activeClass="active"
                            to="jobs"
                            spy={true}
                            smooth={true}
                            offset={-105}
                            duration= {400}
                        >Jobs</Link>
                        <vr/> */}
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
        )
    }
}
