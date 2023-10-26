import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper,Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles'

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes =useStyles();
  // isMobile will be false if the width of the device is less than 600px
  const isMobile = useMediaQuery('(min-width:600px')
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyDn8w_TqhRw80VV7nLFQX8ddFOxS8hRP6w'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e) =>{
          // Basically syncronising the centre and the corners of the google map with the api
          setCoordinates({lat: e.center.lat, lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={''}
      >

      </GoogleMapReact>

    </div>
  )
}

export default Map