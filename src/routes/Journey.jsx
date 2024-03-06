import fetchData from "../api/fetchData";
import { useEffect } from "react";

function Journey() {



    useEffect(() => {
        async function fetchWeather() {
            
                
                    const weatherData = await fetchData("https://aurora-api.cloud/api/planetary-k-3h");
                console.log(weatherData)
               
            
        }

        fetchWeather();
        
    }, []);

  
    return (
        <h1 className="text-stone-200">My jorney begins here</h1>
    )
  }
  
  export default Journey
  