import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div className = "table-container">
                <div className = "triangle-spacer">
                    <div className = "triangle" />
                    <div className = "triangle2" />
                </div>
                <div className = "table-line" />
            </div>
        )
    }
}