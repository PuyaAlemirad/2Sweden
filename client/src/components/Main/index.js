import React from "react"
import Route from "../Route"

import { get_r2r, get_CC } from "../../tools/DAO"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



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
            galleryItems: [<td onClick={content}></td>,
                <td onClick={content}>Curling</td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>,
],
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
    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
      }
     
      onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
      }
     
      onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
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
                        <div className="scrollable">
                            <div className="table-wrap">
                            <table className="olympicTable" border="1px" cellSpacing="50spx" >
                                <thead>
                                    < tr>
                                        <th>Stad</th>
                                        <th>Day 1</th>
                                        <th>Day 2</th>
                                        <th>Day 3</th>
                                        <th>Day 4</th>
                                        <th>Day 5</th>
                                        <th>Day 6</th>
                                        <th>Day 7</th>
                                        <th>Day 8</th>
                                        <th>Day 9</th>
                                        <th>Day 10</th>
                                        <th>Day 11</th>
                                        <th>Day 12</th>
                                        <th>Day 13</th>
                                        <th>Day 14</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="fixed-side"><img src={logo} height="100px" width="100px" /></th>
                                         <td onClick={content}></td>
                                        <td onClick={content}>{}</td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td> 
                                         
                                         
                                    </tr>
                                    <tr>
                                        <th class="fixed-side"><img src={åre} height="100px" width="100px" /></th>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}>Alpline Skiing Luge</td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                    </tr>
                                    <tr>
                                        <th class="fixed-side"><img src={falun} height="130px" width="100px" /></th>
                                        <td onClick={content}><ul><li>Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li></li><li> </li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Combined</li><li> Ski Jumping</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                        <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
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