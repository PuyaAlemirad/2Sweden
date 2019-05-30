import React from "react"
import Route from "../Route"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import { get_r2r, get_CC } from "../../tools/DAO"
import DayOfEvents from "../DayOfEvents";

const events = require("../../tools/Events.json")


export default class Main extends React.Component {
    

    constructor() {
            
        super()
        function content(event) {
            event.target.style.backgroundColor = "grey"
            //const p= document.getElementById("para")



        }
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
        let i = 0; //Each Route needs a unique key.
        const logo = require('./stockholm.jpg');
        const åre = require('./åre.jpg');
        const falun = require('./falun.jpg');
        function content(event) {
            event.target.style.backgroundColor = "grey"
            //const p= document.getElementById("para")



        }


        return (


            <main className="main-div">

                <div className="container" >

                    <form onSubmit={this.search} className="form">
                        <div className="searchBar">

                            <div className="col-lg-12 col-md-12">

                                <input
                                    required
                                    placeholder="🔍From"
                                    name="origin"
                                    className="search form-control"
                                />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group ">
                                {/* <select name="destination" className="custom-select">
                                     <option defaultValue="stockholm">Stockholm</option>
                                    <option value="are">Åre</option>
                                    <option value="falun">Falun</option>
                                </select> */}


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
                            <div>



                            </div>

                            {/* <div>
                        <div className="col-lg-3 col-md-6">
                                <label className="date">
                                 Departure date<br/>
                                <input type="date"/>
                                </label>
                         </div>
                        <div className="col-lg-2 col-md-6">
                                <label className="date">Going home date<br/>
                                    <input type="date"/>
                                </label>
                        </div> 
                        </div> */}


                            <div className="col-lg-6 col-md-6">
                                <button type="submit" className="btn btn-primary btn btn-main ">Search</button>

                            </div>

                            {/* <div className="col-lg col-md-6 sortBy">
                    <select id="sortBy" onChange={this.sortRoutes}>
                        <option value="sort">Sort By</option>
                        <option value="duration">Duration</option>
                        <option value="price">Price</option>
                        <option value="connections">Connections</option>
                    </select>
                    </div> */}


                        </div>
                        <div>
                            <AliceCarousel 
                                mouseDragEnabled
                                responsive={{
                                    0: {items:2},
                                    500: {items:5},
                                    1024: {items:5}
                                }}
                                items={events.map(d => <DayOfEvents date={d.date} events={d.events} />)}
                            >

                                
                            </AliceCarousel>
                      </div>
                    </form>

                </div>

                {/*  <div className="routes">                

                    <table className="table">
                        <thead >
                            <tr className="segment title">
                                <th scope="col">From --> To </th>
                                <th scope="col">Transport </th>
                                <th scope="col">Duration </th>
                                <th scope="col">Price({this.state.currencyCode}) </th>
                            </tr>
                        </thead>
                       

                            {this.state.routes.map(r => {
                                return <Route
                                    key={i++}
                                    dataKey={i}
                                    currency={r.currency}
                                    segments={r.segments}
                                    duration={r.duration}
                                    price={r.price}
                                    origin={r.startPoint}
                                    destination={r.endPoint}

                                />
                            })}
                      
                    </table>
                
                </div> */}
            </main>
        )
    }

    /*    sortRoutes() {
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
       } */

    /*    search(form) {
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
                   currencyCode:data.currencyCode
   
               })
               this.sortRoutes()
           })
       
   } */
}