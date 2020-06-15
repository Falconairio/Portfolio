import React, { Component } from 'react'

export default class About extends Component {

    state = {
        page1Trigger: false,
        page2Trigger: true,
        skills: ["HTML","CSS","Javascript","React","React Native","MongoDB","Express","Node.js","Express","Handlebars.js", "Python", "Java"]
    }

    render() {
        return (
            <div id = 'about' className = 'about-container'>
                {/* <div className = 'about'>
                    <h1>About</h1>
                    <p></p>
                </div> */}
            </div>
        )
    }
}
