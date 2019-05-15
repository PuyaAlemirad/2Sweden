import React from "react"
import Route from "../Route"
import {get_r2r} from "../../tools/DAO"

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            start: "",
            dest: "",
            routes: []
        }

        this.search = this.search.bind(this)
        this.sortRoutes = this.sortRoutes.bind(this)
    }

    render() {
        let i = 1; //Each Route needs a unique key.
        return (
            <main>
                <div className="search">
                    <form onSubmit={this.search}>
                        <input 
                            required 
                            placeholder="🔍From" 
                            name="origin"
                        />
                        <select name="destination">
                            <option value="stockholm">Stockholm</option>
                            <option value="are, sweden">Åre</option>
                            <option value="falun">Falun</option>
                        </select>
                        <select name="currencyCode">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="GBP">GBP</option>
                            <option value="HUF">HUF</option>
                            <option value="NOK">NOK</option>
                            <option value="PLN">PLN</option>
                            <option value="SEK">SEK</option>
                        </select>
                        <button type="submit" className="btn btn-primary btn btn-main">Search</button>
                    </form>
                </div>
                <div className="routes">
                    <select id="sortBy" onChange={this.sortRoutes}>
                        <option value="duration">Duration</option>
                        <option value="price">Price</option>
                        <option value="connections">Connections</option>
                    </select>

                    <h4>{this.state.start} -> {this.state.dest}</h4>

                    {this.state.routes.map(r => {
                        return <Route
                            key={i++}
                            currency={r.currency}
                            segments={r.segments}
                            duration={r.duration}
                            price={r.price}
                        />
                    })}
                </div>
            </main>
        )
    }

    sortRoutes() {
        // Sorts state.routes depending on value of element with id: "sortBy"
        let sortAlg
        switch (document.getElementById("sortBy").value) {
            case "duration":
                sortAlg = (r1,r2) => r1.duration-r2.duration
                break
            case "price":
                sortAlg = (r1,r2) => r1.price-r2.price
                break
            case "connections":
                sortAlg = (r1,r2) => r1.segments.length-r2.segments.length
                break
            default:
                sortAlg = (r1,r2) => r1.duration-r2.duration
        }

        let sortedList = this.state.routes.sort(sortAlg)
        
        this.setState({
            routes: sortedList
        })
    }

    search(form) {
        form.preventDefault()
        
        let destination = form.target.elements["destination"].value
        let origin = String(form.target.elements["origin"].value).trim()
        let currencyCode = form.target.elements["currencyCode"].value

        if (origin === "") {
            // If origin field is empty, do nothing.
            form.target.elements["origin"].value = origin
            return
        }

        get_r2r(origin, destination, currencyCode, data => {
            this.setState({
                "routes": data.routes,
                "start": data.start,
                "dest": data.dest

            })
            this.sortRoutes()
        })
    }
}