import React from "react"


function CityButton(props) {
    let i = 1
    return (
        <button type="button" data-toggle="list" className={"list-group-item list-group-item-action"} id={`${props.day}${props.city[0]}`}>
                {props.events.map(e => 
                    <div className="d-flex justify-content-between" key={i++}>
                        <p className="m-0">{e.name}</p>
                        {(e.isMedal) ? <i className="fas fa-award align-self-center"></i> : ""}
                    </div>
                )}
        </button>
    )
} 

export default function DayOfEvents(props) {

    return (
        <div className="h-100">
            <h6 className="text-center">{props.date}</h6>
            <div className="list-group my-city-list h-100">

            <button 
                type="button" 
                data-toggle="list" 
                className={"list-group-item list-group-item-action list-group-item-danger active"}
                style={{height:"50px"}}
            >
                
        </button>
                
                    <CityButton
                        city={"Stockholm"}
                        day={Number.parseInt(props.date.substring(0,2))-6}
                        events={props.events.s}
                    />
                    <CityButton
                        city={"Åre"}
                        day={Number.parseInt(props.date.substring(0,2))-6}
                        events={props.events.å}
                    />
                    <CityButton
                        city={"Falun"}
                        day={Number.parseInt(props.date.substring(0,2))-6}
                        events={props.events.f}
                    />
            </div>
        </div>
    )
}