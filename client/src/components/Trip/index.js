import React from 'react'
import Route from '../Route'
import {capitalize} from '../../tools/StringFormating'


export default function Trip(props) {
    function getSortAlg() {
        let x = (props.isSortAsc) ? (x,y) => [x,y] : (x,y) => [y,x]

        

        switch(props.sortCat) {
            case "stops": return (o1, o2) => x(o1, o2)[0].segments.length - x(o1, o2)[1].segments.length
            case "time": return (o1, o2) => x(o1, o2)[0].duration - x(o1, o2)[1].duration
            case "price": return (o1, o2) => x(o1, o2)[0].price - x(o1, o2)[1].price
            default: return (o1, o2) => x(o1, o2)[0].segments.length - x(o1, o2)[1].segments.length
        }
    }
    return (
        <form name={`selectedRoute${props.dataKey}`} onSubmit={e=>e.preventDefault()}>

            <button name ={`tripButton${props.dataKey}`} className="btn btn-block btn-secondary my-2 my-rounded"
            data-target={`#trip${props.dataKey}`}
            data-toggle="collapse">
            <p>{`${capitalize(props.start)}   -->   ${capitalize(props.stop)}`}</p></button>

            
            <table id={`trip${props.dataKey}`} className="my-rounded text-center table table-borderless collapse">
                <thead >
                    <tr className="segment title tr">

                        <th scope="col">
                            From --> To 
                    
                        </th>
                        <th scope="col" value ="stops"  onClick={props.changeSort} >
                                
                                Transport
                                <i value ="stops" style={{height: "10px"}} className={"pl-2 align-self:center text-dark " + 
                                (props.sortCat === "stops" ? (props.isSortAsc ? "fas fa-sort" : "fas fa-sort") : "fas fa-sort")} ></i>
                                    
                        </th>
                        <th scope="col" value="time" onClick={props.changeSort}>
                            Duration 
                            <i value ="time" style={{height: "10px"}} className={"pl-2 align-self:center text-dark " + 
                                (props.sortCat === "stops" ? (props.isSortAsc ? "fas fa-sort" : "fas fa-sort") : "fas fa-sort")} ></i>
                        </th>
                        <th scope="col" value="price" onClick={props.changeSort}>
                            Price({props.currencyCode}) 
                            <i value ="price" style={{height: "10px"}} className={"pl-2 align-self:center text-dark " + 
                                (props.sortCat === "stops" ? (props.isSortAsc ? "fas fa-sort" : "fas fa-sort") : "fas fa-sort")} ></i>
                        </th>
                        <th scope = "col"> Option </th>
                    </tr>
                </thead>


                {props.routes.sort(getSortAlg()).map((r, ri) => {
                    return <Route
                        key={ri}
                        dataKey={ri}
                        tripDataKey = {props.dataKey}
                        currency={r.currency}
                        segments={r.segments}
                        duration={r.duration}
                        price={r.price}
                        origin={r.startPoint}
                        destination={r.endPoint}
                    />
                })}

            </table>
        </form>
    )


}