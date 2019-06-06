import React from "react"
import Segment from "../Segment"
import { minutesToHM } from "../../tools/StringFormating"
import Maps from "../Map";



export default function Route(props) {
    let isBlue = 0;
    let list = props.segments.map(s => s.sInfo);
    list.push(props.segments[props.segments.length - 1].eInfo);

    let list2 = []
    props.segments.map(s => s.path.map(p => list2.push(p)))

    const tableId = `table-${props.dataKey}-${props.tripDataKey}`

    return (

        <tbody>
            <tr className={"blue my-rounded " + (props.tripDataKey === undefined ? " segment2 " : " segment ")}>
                <td data-target={`#${tableId}`}
                    data-toggle="collapse" className="col " >

                    <i className={" fa fa-caret-right"}
                        style={{ fontSize: "18px", position: "relative", float: "left" }}
                    />
                    {props.segments[0].from} - {props.segments[props.segments.length - 1].to}
                </td>
                <td data-target={`#${tableId}`}
                    data-toggle="collapse" className="col">{props.segments.map(s => s.transport).join(" - ")}</td>
                <td data-target={`#${tableId}`}
                    data-toggle="collapse" className="col">{minutesToHM(props.duration)}</td>
                <td data-target={`#${tableId}`}
                    data-toggle="collapse">{props.price}</td>
                {props.tripDataKey === undefined ? <td style={{display: "none"}}></td> : <td> <input type="radio" name={`optradio${props.tripDataKey}`} value={props.dataKey} /></td>}




            </tr>

            <tr >

                <td className='my-rounded text-center table collapse' id={tableId} >
                    <div className="container">

                        <div className="col-12 col-lg-6 align-self-center">

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
                        </div>

                        <div className="col-12 col-lg-6">
                            <Maps places={list} path={list2} />

                        </div>
                    </div>


                </td>

            </tr>

        </tbody>


    )

}