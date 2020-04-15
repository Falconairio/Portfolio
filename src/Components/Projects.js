import React, { Component } from 'react'

export default class Projects extends Component {
    state = {
        projects: [
            {
                name: "Project Canary",
                classes: 'project canary',
                footerclasses: "",
                backgroundClass: 'canary',
                key: 0,
                isSelected: false,
                info: {
                    description: "Classroom learning game similar to Kahoot made for Ironhack's module 3 project week.",
                    technologies: ["Mongoose","Express","React","Node.js","MongoDB","Websockets","Cloudinary","Axios","REST Api","CSS"],
                    features: ["User authentication","Create games for people to join","Games are created with random questions from categories you select", "Join via game-specific QR code","Add questions to the pool via the homescreen","Scores are shown in a leaderboard","Responsive"],
                    links: [{
                        name: "Deploy",
                        link: "https://iron-canary.herokuapp.com/"
                    }, {
                        name: "Repo-FE",
                        link: "https://github.com/Falconairio/project-canary"
                    }, {
                        name: "Repo-BE",
                        link: "https://github.com/Falconairio/project-canary-frontend"
                    }],
                    collaborators: [{
                        name: "Johann Moreno",
                        link: "https://github.com/Johanson1988"
                    }],
                    classes: "projectdetails fadeout"
                }
            },
            {
                name: "Petsit",
                classes: 'project petsit',
                footerclasses: "",
                backgroundClass: 'petsit',
                key: 1,
                isSelected: false,
                info: {
                    description: "Petsitting app made for Ironhack's module 2 project week.",
                    technologies: ["Handlebars.js","Express","Node.js","Mongoose","MongoDB","Cloudinary","Axios","REST Api","CSS"],
                    features: ["User Authentication","Create a profile for you and your pet","Pets are shown with type and breed","Post requests for other users to respond to","Filter by pet type"],
                    links: [{
                        name: "Deploy",
                        link: "https://petsit-ironhack.herokuapp.com/"
                    },{
                        name: "Repo",
                        link: "https://github.com/Falconairio/Petsit"
                    }],
                    collaborators: [{
                        name: "Frederic Vannier",
                        link: "https://github.com/Fred011"
                    }],
                    classes: "projectdetails fadeout"
                }
            },
            {
                name: "Trampoline Time Forever",
                classes: 'project trampoline',
                footerclasses: "",
                backgroundClass: 'trampoline',
                key: 2,
                isSelected: false,
                info: {
                    description: "Pong style game made for Ironhack's modele 1 project week",
                    technologies: ["Canvas","HTML","CSS","Javascript"],
                    features: ["Play by keeping the ball from touching the bottom of the screen using a trampoline that you draw with your mouse","Select from multiple difficulties","Enter name to be put on the leaderboard", "Unlock secrets based on name entered"],
                    links: [{
                        name: "Deploy",
                        link: "https://falconairio.github.io/Trampoline-Time-Forever/"
                    }, {
                        name: "Repo",
                        link: "https://github.com/Falconairio/Trampoline-Time-Forever"
                    }],
                    classes: "projectdetails fadeout"
                }
            }
        ],
        vw:  Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        isAnimating: false
    }

    selectProject = (project) => {
        this.setState({isAnimating: true})
        let projects = this.state.projects;

        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj !== project) {
                    let classes = projectObj.classes.concat(" blackbg")
                    let footerclasses = projectObj.footerclasses.concat("destroy")
                    projectObj.classes = classes
                    projectObj.footerclasses = footerclasses
                    return projectObj
                } else {
                    let classes = projectObj.classes.concat(" blackbg")
                    let footerclasses = projectObj.footerclasses.concat("destroy")
                    projectObj.classes = classes
                    projectObj.footerclasses = footerclasses
                    project.isSelected = true;
                    return projectObj
                }
            })
            this.setState({ projects })
        })

        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj !== project) {
                    let classes = projectObj.classes.concat(" dissapear")
                    projectObj.classes = classes
                    return projectObj
                } else {
                    let classes = projectObj.classes.concat(" appear")
                    projectObj.classes = classes
                    project.isSelected = true;
                    return projectObj
                }
            })
            this.setState({ projects })
        }, 100)

        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj === project) {
                    let classes = projectObj.classes.concat(" moveright")
                    projectObj.classes = classes
                    return projectObj
                } else return projectObj
            })
            this.setState({ projects })
        }, 1100)

        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj === project) {
                    let classes = projectObj.info.classes.slice(0, projectObj.classes.indexOf("fadeout"))
                    projectObj.info.classes = classes
                    return projectObj
                } else return projectObj
            })
            this.setState({ projects, isAnimating: false })
        }, 2000)
    }

    unselectProject = (project) => {
        this.setState({ isAnimating: true })
        let projects = this.state.projects;

        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj === project) {
                    let classes = projectObj.info.classes.concat(" fadeout")
                    projectObj.info.classes = classes
                    return projectObj
                } else return projectObj
            })
            this.setState({ projects })}, 100)
        
        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj !== project) {
                    let classes = projectObj.classes.slice(0, projectObj.classes.indexOf("destroy"))
                    projectObj.classes = classes
                    return projectObj
                } else return projectObj
            })
            this.setState({ projects })},500)
    
        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj !== project) {
                    let classes = projectObj.classes.slice(0, projectObj.classes.indexOf("dissapear"))
                    projectObj.classes = classes
                    return projectObj
                } else {
                    let classes = projectObj.classes.slice(0, projectObj.classes.indexOf("appear"))
                    projectObj.classes = classes
                    return projectObj
                }
            })
            this.setState({ projects })}, 1000)

        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj !== project) {
                    return projectObj
                } else {
                    let classes = projectObj.classes.concat(` blackbg`)
                    projectObj.classes = classes
                    project.isSelected = false;
                    return projectObj
                }
            })
            this.setState({ projects })
        }, 2000)

        setTimeout(() => {
            projects = projects.map((projectObj) => {
                if(projectObj !== project) {
                    let classes = projectObj.classes.slice(0, projectObj.classes.indexOf("blackbg"))
                    projectObj.classes = classes;
                    projectObj.footerclasses = "";
                    return projectObj
                } else {
                    let classes = projectObj.classes.slice(0, projectObj.classes.indexOf("blackbg"))
                    projectObj.classes = classes
                    projectObj.footerclasses = "";
                    project.isSelected = false;
                    return projectObj
                }
            })
            this.setState({ projects, isAnimating: false })
        }, 2200)
        }

    chooseSelectOrUnselect = (project, fromButton) => {
        if(!this.state.isAnimating) {
            if(this.state.vw > 800) {
                if(fromButton) {
                    this.unselectProject(project)
                } else if(!project.isSelected) {
                    this.selectProject(project)
                }
            } else {
                this.renderModal(project)
            }
        }
    }

    render() {
        return (
            <div id = 'projects' className = 'projects-container'>
                <h1>Projects</h1>
                <div className = "projects">
                    {this.state.projects.map((project) => {
                        return(
                            <div className = {project.classes}
                            onClick = {() => {this.chooseSelectOrUnselect(project)}}>
                                {project.isSelected ? 
                                    <div className = {project.info.classes}>
                                        <div className = "nameandlinks">
                                            <h2>{project.name}</h2>
                                            <div>
                                                {project.info.links.map((link) => {
                                                    return (<a href = {link.link} className = "projectlink">{link.name}</a>)
                                                })}
                                            </div>
                                        </div>
                                        <p>{project.info.description}</p>
                                        <div className = "featuresandtechnologies">
                                            <div>
                                                <h3>Technologies</h3>
                                                <ul>
                                                    {project.info.technologies.map((tech) => {
                                                        return(<li>{tech}</li>)})}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3>Features</h3>
                                                <ul>
                                                    {project.info.features.map((feature) => {
                                                            return(<li>{feature}</li>)})}
                                                </ul>
                                            </div>
                                        </div>
                                        { project.info.collaborators ?
                                            <div className = "collaborators">
                                                <h3>Made in collaboration with:</h3>
                                                <div className = "collaborator">
                                                    {
                                                        project.info.collaborators.map((ref) => {
                                                            return(
                                                                <a href = {ref.link}>{ref.name}</a>
                                                            )
                                                        })
                                                    }
                                                    <button onClick = {() => {this.chooseSelectOrUnselect(project, true)}} className = "buttonCursor">
                                                        Back
                                                    </button>
                                                </div>
                                            </div>
                                        : <div className = "buttonWrapper">
                                            <button onClick = {() => {this.chooseSelectOrUnselect(project, true)}} className = "buttonCursor">
                                                Back
                                            </button>
                                          </div>}
                                    </div>
                                    : <footer className = {project.footerclasses}>{project.name}</footer>
                                }
                            </div>)
                    })}
                </div>
            </div>
        )
    }
}
