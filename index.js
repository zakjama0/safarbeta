// axios is a library that helps us make api calls
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) =>{
    try {
        //request
        const { data: {data} } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat ,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '312917582fmsh44ae633e94bb69ap18d3fajsn8617488ed8c7',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });


        return data;
         //if the request is successful then the code runs as expected, if not then an error is catched
    }
    catch(error){
        console.log(error)
    }
}