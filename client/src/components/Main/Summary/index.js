import React from 'react'
import Route from '../../Route'

export default function Summary(props) {
    return (
               
            <table id={`trip${props.dataKey}`} className="table">
                <thead >
                    <tr className="segment title">

                        <th scope="col">From --> To </th>
                        <th scope="col">Transport </th>
                        <th scope="col">Duration </th>
                        <th scope="col">Price({props.currencyCode}) </th>
                        <th scope = "col"> Option </th>
                    </tr>
                </thead>
                {props.routes.map((r, ri) => {
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

        
    )
}
