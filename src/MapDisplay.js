import React from 'react';
import GoogleMapReact from 'google-map-react';

class MapDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      center: this.props.center,
      zoom: 11
    }
  }

  render(){
    const {center, zoom} = this.state;
    console.log(center);
    return(
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'INSERT KEY HERE'}}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        </GoogleMapReact>
      </div>

    )

  }

}

export default MapDisplay;
