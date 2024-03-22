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

function MiniMap() {
    const position = { lat: 34.05638771273931, lng: -117.82131090540534} //position of bronco student center

    return (
      <>
        <APIProvider apiKey={import.meta.env.GOOGLE_MAP_API_KEY}> 
          <div style={{height: "25vh", width: "30%" }}>
            <Map defaultZoom = {17} //inital zoom
              defaultCenter = {position} //initally centers on bronco student center
              mapId={import.meta.env.GOOGLE_MAP_ID} //Style of map
              disableDefaultUI={true} //turns off the UI so the map is less clustered
            >
              <AdvancedMarker position={position}> 
                <Pin 
                  background={'green'} //Creates the mark on the map CPP colors
                  borderColor={'green'} 
                  glyphColor={'yellow'}
                />
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>
        <p>3801 W Temple Ave, Pomona, CA 91768</p>
      </>
    )
  }
  
  export default MiniMap