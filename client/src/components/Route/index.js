import React from "react"
import Segment from "../Segment"
import { minutesToHM } from "../../tools/StringFormating"


export default function Route(props) {
    let isBlue = 0;
    return (
        <tbody>
        <tr 
            data-target={`#table${props.dataKey}`}
            data-toggle="collapse"
            className={"segment "+ (props.dataKey%2===0? "white" : "navy")}
            
        >
            
        
           
                <td className="col glyphicon glyphicon-triangle-bottom"><span/> { props.segments[0].from} - {props.segments[props.segments.length-1].to}</td>
                <td className="col">{props.segments.map(s=>s.transport).join(" - ")}</td>
                <td className="col">{minutesToHM(props.duration)}</td>
                <td>{props.price}</td>

                

                    
                </tr>
                
<tr >

                <td className='table collapse' id={`table${props.dataKey}`} >
                    <div className="segment title">
                        <h5>{"From-To "}</h5>
                        <h5>{"Transport "}</h5>
                        <h5>{"Duration "}</h5>
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
            </td>
            
           </tr>
           </tbody>
          
    )
}