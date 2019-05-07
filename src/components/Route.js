import React from "react"
import Segment from "./Segment"
import {minutesToHM} from "../tools/StringFormating"

export default function Route(props) {
    return (
        <div>
            <h5>{`${minutesToHM(props.duration)} ${props.price}${props.currency}`}</h5>
            {props.segments.map(s => <Segment
                key={s.index}
                transport={s.transport}
                from={s.from}
                to={s.to}
                price={s.price}
                duration={s.duration}
                currency={s.currency}
            />)}
        </div>
    )
}