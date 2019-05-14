import React from "react"
import Segment from "../Segment"
import { minutesToHM } from "../../tools/StringFormating"

export default function Route(props) {
    let isBlue = 0;
    return (
        <tr 
            data-target={`#table${props.dataKey}`}
            data-toggle="collapse"
        >
            <div>


                <td>{props.dataKey}</td>
                <td>{props.segments[0].transport}</td>
                <td>{props.duration}</td>
                <td>{props.price}</td>



                    </div>



                <div className='table collapse' id={`table${props.dataKey}`}>
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
                        blue={isBlue++ % 2 === 1}
                    />)}
            </div>
        </tr>
    )
}