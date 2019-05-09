import React from "react"
import {minutesToHM} from "../../tools/StringFormating"

export default function Segment(props) {
    return (
        <div className={"segment "+ (props.blue? "yellow" : "blue")}>

            <p className="col">{`${props.from}-${props.to}`}</p>
            <p className="col yellow">{props.transport}</p>
            <p className="col">{minutesToHM(props.duration)}</p>
            <p>{`${props.price}`}</p>
        </div>
    )
}