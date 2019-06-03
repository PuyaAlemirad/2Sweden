import React from 'react'

export default function Search(props) {
   
    return (
        <div>
            <button onClick={()=> props.changePageTo("result")}>Search</button>




            {console.log("hej")}
        </div>
    )
}
