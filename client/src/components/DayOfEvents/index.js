import React from "react"

export default function DayOfEvents(props) {

    return (
        <div>
            <h3>{props.date}</h3>
            <div className="btn-group-vertical">

                <button className="btn btn-primary">
                    <div>
                        {props.events.s.map(e => <div>
                                <p>{e.name}</p>
                                {(e.isMedal) ? <i class="fas fa-award"></i> : ""}
                            </div>
                        )}
                    </div>
                </button>
                <button className="btn btn-primary">
                    <div>
                        {props.events.å.map(e => <div>
                                <p>{e.name}</p>
                                {(e.isMedal) ? <i class="fas fa-award"></i> : ""}
                            </div>
                        )}
                    </div>
                </button>
                <button className="btn btn-primary">
                    <div>
                        {props.events.f.map(e => <div>
                                <p>{e.name}</p>
                                {(e.isMedal) ? <i class="fas fa-award"></i> : ""}
                            </div>
                        )}
                    </div>
                </button>
            </div>
        </div>
    )
}