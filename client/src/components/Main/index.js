import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import Summary from './Summary'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            mainPage: "search",
            results: [],
            routes: []
        }
    }

    select() {
        switch (this.state.mainPage) {
            case "search":
                return <Search
                    changePageTo={(r, page) => this.setState({ results: r, mainPage: page })}
                />

            case "result":
                console.log("hejsan")
                return <Result results={this.state.results} changePageTo={(r, page) => this.setState({ routes: r, mainPage: page })} />

            case "summary":
                return <Summary routes={this.state.routes} />

            default: console.error("error")
        }
    }
    render() {
        return (
            <div >
                {this.select()}
            </div>
        )
    }
}

