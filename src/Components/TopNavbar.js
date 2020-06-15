import React, { Component } from 'react'
import { Link } from "react-scroll";

export default class TopNavbar extends Component {

    state = {
        isMobile: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 900,
        navbarClass: "topnav-container nav-regular-position",
        scrollPos: window.pageYOffset
    }

    componentDidMount = () => {
        if(this.state.isMobile) {
            window.addEventListener("scroll", this.setNavbarSettings)
        }
        window.addEventListener("resize", () => {
            if(!this.state.isMobile && Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 900) {
                window.addEventListener("scroll", this.setNavbarSettings)
            } else if(this.state.isMobile && Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 900) {
                window.removeEventListener("scroll", this.setNavbarSettings)
            }
        })
    }

    setNavbarSettings = () => {
        var currentScrollPos = window.pageYOffset;
        if (this.state.scrollPos > currentScrollPos) {     
          this.setState({ navbarClass: "topnav-container nav-regular-position", scrollPos: currentScrollPos })
        } else {
          this.setState({ navbarClass: "topnav-container nav-hidden-position", scrollPos: currentScrollPos })
        }
    }

    render() {
        return (
            <div className = { this.state.navbarClass }>
                <Link 
                            className="navLink"
                            activeClass="active"
                            to="about"
                            spy={true}
                            offset={-105}
                            duration= {400}
                        >About</Link>
                        <vr/>
                        <Link 
                            className="navLink"
                            activeClass="active"
                            to="projects"
                            spy={true}
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
                            offset={-105}
                            duration= {400}
                        >Contact</Link>
            </div>
        )
    }
}
