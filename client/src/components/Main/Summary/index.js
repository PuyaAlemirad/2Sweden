import React from 'react'
import Route from '../../Route'

export default function Summary(props) {
    return (
               
            <table className="my-rounded text-center table">
                <thead >
                    <tr className="segment2 title">

                        <th scope="col">From --> To </th>
                        <th scope="col">Transport </th>
                        <th scope="col">Duration </th>
                        
                        <th scope="col">Price({props.routes[0].currency}) </th>
                    </tr>
                </thead>
                {props.routes.map((r, ri) => {
                    return <Route
                        key={ri}
                        dataKey={ri}
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
