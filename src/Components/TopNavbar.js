import React, { Component } from 'react'
import { Link } from "react-scroll";

export default class TopNavbar extends Component {

    state = {
        isMobile: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 900,
        scrollPos: window.pageYOffset,
        navbarPos: -1
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
          this.setState({ scrollPos: currentScrollPos })
          if(currentScrollPos === 0) {
            this.setState({ navbarPos: -1 })
          } else if(this.state.navbarPos < -1) {
            let newPos = this.state.navbarPos + 3;
            this.setState({ navbarPos: newPos })
        }
        } else {
          this.setState({ scrollPos: currentScrollPos })
          if(this.state.navbarPos > -51) {
              let newPos = this.state.navbarPos - 3;
              this.setState({ navbarPos: newPos })
          }
        }
    }

    render() {
        return (
            <div className = "topnav-container" style = {{ top: `${this.state.navbarPos}px` }}>
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
