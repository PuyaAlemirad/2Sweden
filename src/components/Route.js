import React from "react"
import Segment from "./Segment"
import {minutesToHM} from "../tools/StringFormating"

export default function Route(props) {
    return (
        <div>
            <h5>{`${minutesToHM(props.duration)} ${props.price}${props.currency}`}</h5>

            <div className='table'>
            <div className="segment title">
                <h5>{"From-To"}</h5>
                <h5>{"Transport"}</h5>
                <h5>{"Duration"}</h5>
                <h5>{`Price(${props.currency})`}</h5>
            </div>


            {props.segments.map(s => <Segment
                key={s.index}
                transport={s.transport}
                from={s.from}
                to={s.to}
                price={s.price}
                duration={s.duration}
                currency={s.currency}
                blue={s.blueBack}
                />)}
            </div>
        </div>
    )
}