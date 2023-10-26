
import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/header/header';
import List from './components/list/list';
import Map from './components/map/map';
import {CssBaseline, Grid} from '@material-ui/core';
import { getPlacesData } from './api';

function App() {
   

const [places, setPlaces] =useState({});
const [coordinates, setCoordinates] = useState({});
const [bounds,setBounds] = useState(null);
// getting the users lat and lng and setting it, the app asks for location and this readily displays the users current location
  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) =>{
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);





  // depency array being empty means that it will only run at the start of the application
  // adding bounds and coordinates to the dependency array will mean it constantly update with those variables
  
  useEffect(() => {
       getPlacesData(bounds.sw, bounds.ne)
      //  because its async we have to use .then
       .then((data) =>{
        console.log(data)
        setPlaces(data)

       })
  
  
    }, [coordinates, bounds])
    

  


  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing ={3} style = {{width: '100%'}}>
          {/* Below means that it will take full width on mobile devices, and takes 4 spaces on larger devices, width is a total of 12 spaces, in which the map takes 8 and the list takes 4  */}
          <Grid item xs = {12} md ={4}>
           <List places={places} />
          </Grid>
        <Grid item xs = {12} md ={8}>
            <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            
            />
        </Grid>
      </Grid>
    </>
  )
}

export default App