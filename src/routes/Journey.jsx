import fetchData from "../api/fetchData";
import { useEffect } from "react";

function Journey() {



    useEffect(() => {
        async function fetchWeather() {
            
                
                    const weatherData = await fetchData("http://209.38.184.216:8080/api/planetary-k-3h");
                console.log(weatherData)
               
            
        }

        fetchWeather();
        
    }, []);

  
    return (
        <h1 className="text-stone-200">My jorney begins here</h1>
    )
  }
  
  export default Journey
  