import React, { Component } from 'react'

export default class Contact extends Component {

    state = {
        emailHidden: true,
        githubHidden: true,
        linkedinHidden: true
    }

    handleEmailHidden = () => {
        if(this.state.emailHidden) {
           return 'hide-icon';
        } else {
            return 'unhide-icon'
        }
    }

    handleGithubHidden = () => {
        if(this.state.githubHidden) {
           return 'hide-icon';
        } else {
            return 'unhide-icon'
        }
    }

    handleLinkedinHidden = () => {
        if(this.state.linkedinHidden) {
           return 'hide-icon';
        } else {
            return 'unhide-icon'
        }
    }

    setEmailHidden = () => {
        let handle = !this.state.emailHidden
        this.setState({ emailHidden: handle })
    }
    setGithubHidden = () => {
        let handle = !this.state.githubHidden
        this.setState({ githubHidden: handle })
    }
    setLinkedinHidden = () => {
        let handle = !this.state.linkedinHidden
        this.setState({ linkedinHidden: handle })
    }

    render() {
        const hide = this.handleEmailHidden()
        const classesEmail = `${hide}`
        const hide2 = this.handleGithubHidden()
        const classesGithub = `${hide2}`
        const hide3 = this.handleLinkedinHidden()
        const classesLinkedin = `${hide3}`
        return (
            <div id = 'contact' className = 'contact-container'>
                <h1>Contact</h1>
                <div>
                    <div className = 'gmailwrapper'>
                        <img src = './images/GmailLogo.png' alt = '' className = 'gmailicon' onClick ={this.setEmailHidden} />
                    </div>
                    <a href = 'mailto:griffterrycode@gmail.com' className = {classesEmail}>griffterrycode@gmail.com</a>
                </div>
                <div>
                    <a href = 'https://github.com/Falconairio' className = {classesGithub}>github.com/Falconairio</a>
                    <div className = 'githubwrapper'>
                        <img src = './images/GithubIcon.png' alt = '' className = 'githubicon' onClick ={this.setGithubHidden} />
                    </div>
                </div>
                <div>
                    <div className = 'linkedinwrapper'>
                        <img src = './images/linkedinIcon.png' alt = '' className = 'linkedinIcon' onClick ={this.setLinkedinHidden} />
                    </div>
                    <a href = 'https://www.linkedin.com/in/griffithterry/' className = {classesLinkedin}>linkedin.com/in/griffithterry/</a>
                 </div>
            </div>
        )
    }
}
