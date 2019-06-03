import React from 'react'

export default function Result (props) {
        
        let routes = ["hej"]
        return (
            <div>
                Hej result
                {console.log(props.results)}
                <button onClick={() => props.changePageTo(routes,"summary")}>Continue</button>

                
            </div>
        )
    

    // sortRoutes() {
    //     return
    //     // Sorts state.routes depending on value of element with id: "sortBy"
    //     let sortAlg
    //     switch (document.getElementById("sortBy").value) {
    //         case "duration":
    //             sortAlg = (r1, r2) => r1.duration - r2.duration
    //             break
    //         case "price":
    //             sortAlg = (r1, r2) => r1.price - r2.price
    //             break
    //         case "connections":
    //             sortAlg = (r1, r2) => r1.segments.length - r2.segments.length
    //             break
    //         default:
    //             sortAlg = (r1, r2) => r1.duration - r2.duration
    //     }
    
    //     let sortedList = this.state.routes.sort(sortAlg)
    
    //     this.setState({
    //         routes: sortedList
    //     })
    // }
}
