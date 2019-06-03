import React, { Component } from 'react'

export default class Result extends Component {
    constructor(){
        super()
        
        this.state = {
            page: 0
        }
    }

    
    render() {
        return (
            <div>
                Hej result
                <button onClick={() => this.props.changePageTo("summary")}>Continue</button>

                
            </div>
        )
    }
}
