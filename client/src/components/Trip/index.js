import React from 'react'
import Route from '../Route'
import {capitalize} from '../../tools/StringFormating'


export default function Trip(props) {
    let i = 0;
    return (
        <div>

            <button className="btn btn-block btn-secondary my-2"
            data-target={`#trip${props.dataKey}`}
            data-toggle="collapse">
            <p>{`${capitalize(props.start)}   -->   ${capitalize(props.stop)}`}</p></button>


            <table id={`trip${props.dataKey}`} className="table collapse">
                <thead >
                    <tr className="segment title">

                        <th scope="col">From --> To </th>
                        <th scope="col">Transport </th>
                        <th scope="col">Duration </th>
                        <th scope="col">Price({props.currencyCode}) </th>
                        <th scope = "col"> Option </th>
                    </tr>
                </thead>


                {props.routes.map(r => {
                    return <Route
                        key={i++}
                        dataKey={i}
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
        </div>
    )


}