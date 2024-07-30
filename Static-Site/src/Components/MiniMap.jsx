"use client";

import.meta.env.PROD

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  MapControl,
  ControlPosition,
} from "@vis.gl/react-google-maps";
//https://visgl.github.io/react-google-maps/docs/api-reference/components/map

//Maybe add the advanced marker pinn with the mapid?

function MiniMap() {
    const position = { lat: 34.05638771273931, lng: -117.82131090540534} //position of bronco student center

    return (
      <>
        <APIProvider apiKey={import.meta.env.VITE_REACT_MAP_KEY}> 
          <div style={{height: "25vh", 
                      width: "55vh",
                      borderRadius: "1vh",
                      overflow: 'hidden'}}>
            <Map defaultZoom = {17} //inital zoom
              defaultCenter = {position} //initally centers on bronco student center
              //mapid here
              disableDefaultUI={true} //turns off the UI so the map is less clustered
            >
              
            </Map>
          </div>
        </APIProvider>

      </>
    )
  }
  
  export default MiniMap