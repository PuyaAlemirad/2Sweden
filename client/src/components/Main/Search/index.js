import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { get_r2r2, get_CC } from "../../../tools/DAO"
import DayOfEvents from "../../DayOfEvents";

const events = require("../../../tools/Events.json")



export default class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            start: 0,
            end: 0,
            routes: [],
            currencyCode: "$$$",
            localCurrency: null,
            highlights: []
        }
    }

    componentDidMount() {
        get_CC(curr => this.setState({ localCurrency: curr }))
    }




    highlight(event) {
        const target = event.target
        const value = target.value
        let highlights = this.state.highlights

        highlights = highlights.filter(e => e !== value)


        if (target.className.includes("active"))
            highlights.push(value)


        this.setState({ highlights: highlights })
        console.log(highlights)
    }


    render() {
        let i = 0 //Each Route needs a unique key.
        let eventNamesList = {}

        events.flatMap(day => Object.values(day.events))
            .forEach(city => city.forEach(event => eventNamesList[event.name] = ""))
        eventNamesList = Object.keys(eventNamesList)

        return (
            <div className="yellow my-rounded py-3 container my-3">
                <form name="search" className="row">
                    <div className="col-12 col-md-3">
                        <input
                            required
                            placeholder="🔍From"
                            name="origin"
                            className="form-control"
                        />
                        <div className="form-group w-100">
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
                    <div className="btn-group btn-group-toggle overflow-auto col-12 col-md-9">
                        {eventNamesList.map((e, ei) =>
                            <button key={ei} onClick={ev => this.highlight(ev)} value={e} type="button" className="btn btn-primary" data-toggle="button">
                                {e}
                            </button>)
                        }
                    </div>
                </form>
                <div className="row py-2">
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
                            <DayOfEvents date={d.date} events={d.events} key={i++} highlights={this.state.highlights} />
                        )}
                    </Carousel>
                </div>
                <div className="row">
                    <button onClick={() => this.search()} className="btn btn-primary btn btn-main ">Search</button>
                </div>
            </div>
        )
    }



    search(form) {
        const searchForm = document.forms["search"]
        const dayForms = events.map((day, dayIndex) => document.forms[`day-${dayIndex + 1}`])

        const origin = searchForm["origin"].value
        const currency = searchForm["currencyCode"].value

        let stops = {
            0: origin
        }

        const choices = ["none", "Stockholm", "Are, Sweden", "Falun"]
        dayForms.map(f => {
            for (let c of choices) {
                if (f[c].className.includes("active")) {
                    /* if (c === "Åre")
                        c = "are, sweden" */
                    return c
                }
            }
        }).forEach((c, ci) => {
            if (c !== "none") {
                const x = Object.values(stops)
                if (x[Object.keys(stops).reduce((o1, o2) => Math.max(Number.parseInt(o1), Number.parseInt(o2)))] !== c)
                    stops[ci + 1] = c
            }
        })

        stops[Object.keys(stops).reduce((o1, o2) => Math.max(Number.parseInt(o1), Number.parseInt(o2))) + 2] = origin

        console.log(stops)

        let y = Object.values(stops)
        let routes = []

        y.forEach((city, index) => {
            const nextCity = y[index + 1]
            if (nextCity !== undefined)
                routes.push({
                    origin: city,
                    destination: nextCity
                })
        })

        get_r2r2(routes, currency, d => {
            return this.props.changePageTo(d, "result")
        })








        // form.preventDefault()

        // let destination = form.target.elements["destination"].value
        // // let origin = String(form.target.elements["origin"].value).trim()
        // let currencyCode = form.target.elements["currencyCode"].value


        // if (origin === "") {
        //     // If origin field is empty, do nothing.
        //     form.target.elements["origin"].value = origin
        //     return
        // }

        // get_r2r(origin, destination, currencyCode, data => {
        //     console.log(this.state.localCurrency)
        //     this.setState({
        //         routes: data.routes,
        //         start: data.oCoords,
        //         end: data.dCoords,
        //         currencyCode: data.currencyCode

        //     })
        //     this.sortRoutes()
        // })

    }
}

