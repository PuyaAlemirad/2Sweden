import React from "react"

export default function Segment(props) {
    return (
        <div>
            {`${props.transport} for ${props.duration}min from ${props.from} to ${props.to} costing ${props.price}${props.currency}`}
        </div>
    )
}