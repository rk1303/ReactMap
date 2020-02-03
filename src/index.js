import React, { Component } from 'react';
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';
import './style.css';


class App extends Component {

  

  constructor() {
    super();

    this.state = {

      //center location of map
      center : {
        lat: 23.6693, 
        lng: 86.1511
      },

      //how much you want to zoom
      zoom : 16,

      myMarkers : []
    };
    
    const aMarker = {
      name : 'Bokaro Steel City',
      lat : 23.6693, 
      lng : 86.1511,
    }
    this.state.myMarkers.push(aMarker);

   /* aMarker = {
      name : 'FreeStyle',
      lat : 37.3599588,
      lng : -122.0653,
    }
    this.state.myMarkers.push(aMarker);

   /* aMarker = {
      name : 'Alta Vista',
      lat : 37.360188,
      lng : -122.064,
    }
    this.state.myMarkers.push(aMarker);*/

    this.setState( {myMarkers : this.state.myMarkers} );
  }

  
 

  render() {

    //Marker Component
    const Marker = ({text}) => {
        return (
              <div><b>{text}</b></div>
        );
    }

    return (
      <div>

 
     
        <center>
        <div style={ { height: '80vh', width: '90%' } }>

          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBiBGd1wMllwtgMRY2crh7_t_WK7EhqZ54' /*Google API Key goes here */ }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom} 
          >

          
          {
            //Add a list of Markers to Your Map
            this.state.myMarkers.map( (each) =>
              <Marker
                lat = {each.lat}
                lng = {each.lng}
                text = {each.name}
              />
            )
          }

          </GoogleMapReact>
         
        </div> 
        </center>

      </div>
      
    );
  }
}

render(<App />, document.getElementById('root'));


