import React from 'react';
import {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline} from "react-google-maps";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY





const MyMapComponent = withScriptjs(withGoogleMap((props) =>
{
  
  let list=[];
  for(let p in props.places){
    
     let icon= 
{     
  url:  (p === 0) ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png":"http://maps.google.com/mapfiles/ms/icons/red-dot.png"
 
}
console.log(p)
list.push(<Marker
position= {props.places[p].coords}
title={props.places[p].name}
icon={icon}

key={p}

/>)

  }
  return (<GoogleMap
  defaultZoom={2}
  defaultCenter={props.places[0].coords}
>
  
  <Polyline path={props.path} options={{strokeColor: 'orange',strokeWeight: 6}}/>
  
  {list}
}
</GoogleMap>)}
))

class Maps extends Component {
  
    render () {
      if(!this.props.places[0] || !this.props.places[1])
      return (<div/>)
        return(
<MyMapComponent
  places={this.props.places}
  isMarkerShown
  path={this.props.path}
  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>)

    }
}

export default Maps;