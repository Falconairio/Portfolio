import React, { Component } from 'react'

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
                    <hr />
                        <ul>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Jobs</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
