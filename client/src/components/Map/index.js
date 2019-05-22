import React from 'react';
import {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

/* let departue1 = new cordinator(route.departuePlace.lat, route.departuePlace.Ing)
let departue2 = new cordinatoar(route.departuePlace.lat, route.departuePlace.Ing)
allDepartures = [];
allDepartures.push(departue1)
allDepartures.push(departue2)  */

 const position1 = {lat : 5, lng: 18.0649}
const position2 = {lat: 59.91273 ,   lng: 10.74609}
const allPost = [];
allPost.push(position1);
allPost.push(position2); 

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={8}
  defaultCenter={props.places[0]}
>
  {props.isMarkerShown && <Marker position={props.places[1]} />}
  <Polyline path={props.places}/>

  <Marker position={props.places[0]}/>
</GoogleMap>
))

class Maps extends Component {
  
    render () {
      if(!this.props.places[0] || !this.props.places[1])
      return (<div/>)
        return(
<MyMapComponent
  places={this.props.places}
  isMarkerShown
  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>)

    }
}

export default Maps;