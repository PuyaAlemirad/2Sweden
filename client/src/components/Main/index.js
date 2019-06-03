import React, {Component} from 'react'
import Search from './Search'
import Result from './Result'
import Summary from './Summary'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            mainPage: "search"
        }
    }

    select() {
        const changePage = s => this.setState({mainPage: s})

        switch (this.state.mainPage) {
            case "search":
                return <Search changePageTo ={changePage}/>

                    case "result":
                    return <Result changePageTo={changePage} />

                        case "summary":
                        return <Summary />

                            default: console.log("error")

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