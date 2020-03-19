import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div className = "table-container">
                <div className = "table-top-line" />
                <div className = "table-base-container" >
                    <div className = "triangle-spacer">
                        <div className = "triangle" />
                        <div className = "triangle2" />
                    </div>
                    <div className = "table-line" />
                </div>
                <div className = "table-legs">
                    <div className = "table-leg" id = "leg1" />
                    <div className = "table-leg"/>
                </div>
            </div>
        )
    }
}