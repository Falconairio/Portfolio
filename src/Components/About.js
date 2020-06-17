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
                <div className = 'about'>
                    <h1>About</h1>
                    <p>Hi, I’m a programming wizard in training. My journey has just started, but I hope to grow my career to the point where I can have a positive impact on the world. I had taken coding classes over my four years of high school, but it was not until October 2019 that I took my first step in my web development career by attending the Ironhack school. I am always looking to learn new technologies and use them in fun and creative ways. Below, you can find projects that I have worked on and my contact info.</p>
                </div>
            </div>
        )
    }
}
