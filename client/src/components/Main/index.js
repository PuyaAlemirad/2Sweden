import React from "react"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { get_r2r, get_CC } from "../../tools/DAO"
import DayOfEvents from "../DayOfEvents";

const events = require("../../tools/Events.json")


export default class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            start: 0,
            end: 0,
            routes: [],
            currencyCode: "$$$",
            localCurrency: null
        }

        //  this.search = this.search.bind(this)
        //   this.sortRoutes = this.sortRoutes.bind(this)
    }

    componentDidMount() {

        get_CC(curr => {
            this.setState({ localCurrency: curr })
        })



    }


    render() {
        let i = 0 //Each Route needs a unique key.

        return (
            <main className="main-div">
                <div className="container" >
                    <div className="row form">
                        <input
                            required
                            placeholder="🔍From"
                            name="origin"
                            className="search form-control"
                        />
                        <div className="form-group">
                            <select name="currencyCode" className="custom-select">
                                <option value={this.state.localCurrency}>{`Local currency(${this.state.localCurrency})`}</option>
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
                        </div>
                    </div>
                    <div className="row">
                        <Carousel 
                            responsive={{
                                desktop: {
                                    breakpoint: { max: 3000, min: 1024 },
                                    items: 5
                                  },
                                  tablet: {
                                    breakpoint: { max: 1024, min: 576 },
                                    items: 3
                                  },
                                  mobile: {
                                    breakpoint: { max: 576, min: 0 },
                                    items: 2
                                  }
                            }}
                        >
                            {events.map(d => 
                                <DayOfEvents date={d.date} events={d.events} key={i++} />    
                            )}
                        </Carousel>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn btn-primary btn btn-main ">Search</button>
                    </div>

                </div>


            </main>
        )
    }

    sortRoutes() {
        return
        // Sorts state.routes depending on value of element with id: "sortBy"
        let sortAlg
        switch (document.getElementById("sortBy").value) {
            case "duration":
                sortAlg = (r1, r2) => r1.duration - r2.duration
                break
            case "price":
                sortAlg = (r1, r2) => r1.price - r2.price
                break
            case "connections":
                sortAlg = (r1, r2) => r1.segments.length - r2.segments.length
                break
            default:
                sortAlg = (r1, r2) => r1.duration - r2.duration
        }

        let sortedList = this.state.routes.sort(sortAlg)

        this.setState({
            routes: sortedList
        })
    }

    search(form) {
        return
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
            console.log(this.state.localCurrency)
            this.setState({
                routes: data.routes,
                start: data.oCoords,
                end: data.dCoords,
                currencyCode: data.currencyCode

            })
            this.sortRoutes()
        })

    }
}