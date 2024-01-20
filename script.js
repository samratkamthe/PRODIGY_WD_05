
const getweather = async (city) => {
 
    cityname.innerHTML=city;


    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae1d23678emsh39d4efee00e3645p10c2efjsn67c315ed0f41',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result){
         cloud_pct.innerHTML= result.cloud_pct;
         temp.innerHTML = result.temp;
         temp1.innerHTML = result.temp;

         feels_like.innerHTML = result.feels_like;
         humidity.innerHTML = result.humidity;
         humidity1.innerHTML = result.humidity;

         min_temp.innerHTML = result.min_temp;
         max_temp.innerHTML = result.max_temp;
        //  wind_speed.innerHTML = result.wind_speed;
         wind_speed2.innerHTML = result.wind_speed;

         wind_degrees.innerHTML = result.wind_degrees;
         sunrise.innerHTML = result.sunrise;
         sunset.innerHTML = result.sunset;
        }
        

    } catch (error) {
        console.error(error);
    }

}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value)
})
getweather("Pune")
/////////////////////////////////////////////////////////////////PUNE
const forPune = async () => {

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae1d23678emsh39d4efee00e3645p10c2efjsn67c315ed0f41',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result){
        //  pcloud_pct.innerHTML= result.cloud_pct;
         ptemp.innerHTML = result.temp;
         pfeels_like.innerHTML = result.feels_like;
         phumidity.innerHTML = result.humidity;
         pmin_temp.innerHTML = result.min_temp;
         pmax_temp.innerHTML = result.max_temp;
         pwind_speed.innerHTML = result.wind_speed;
         pwind_degrees.innerHTML = result.wind_degrees;
         psunrise.innerHTML = result.sunrise;
         psunset.innerHTML = result.sunset;
        }
        

    } catch (error) {
        console.error(error);
    }

}
forPune();


////////MUMbai
const forMumbai = async () => {

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae1d23678emsh39d4efee00e3645p10c2efjsn67c315ed0f41',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result){
        //  pcloud_pct.innerHTML= result.cloud_pct;
         mtemp.innerHTML = result.temp;
         mfeels_like.innerHTML = result.feels_like;
         mhumidity.innerHTML = result.humidity;
         mmin_temp.innerHTML = result.min_temp;
         mmax_temp.innerHTML = result.max_temp;
         mwind_speed.innerHTML = result.wind_speed;
         mwind_degrees.innerHTML = result.wind_degrees;
         msunrise.innerHTML = result.sunrise;
         msunset.innerHTML = result.sunset;
        }
        

    } catch (error) {
        console.error(error);
    }

}
forMumbai();


///////Delhi

const forDelhi = async () => {

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae1d23678emsh39d4efee00e3645p10c2efjsn67c315ed0f41',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result){
        //  pcloud_pct.innerHTML= result.cloud_pct;
         dtemp.innerHTML = result.temp;
         dfeels_like.innerHTML = result.feels_like;
         dhumidity.innerHTML = result.humidity;
         dmin_temp.innerHTML = result.min_temp;
         dmax_temp.innerHTML = result.max_temp;
         dwind_speed.innerHTML = result.wind_speed;
         dwind_degrees.innerHTML = result.wind_degrees;
         dsunrise.innerHTML = result.sunrise;
         dsunset.innerHTML = result.sunset;
        }
        

    } catch (error) {
        console.error(error);
    }

}
forDelhi();
  ///////KOLKATA

  const forKolkata = async () => {

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae1d23678emsh39d4efee00e3645p10c2efjsn67c315ed0f41',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result){
        //  pcloud_pct.innerHTML= result.cloud_pct;
         ktemp.innerHTML = result.temp;
         kfeels_like.innerHTML = result.feels_like;
         khumidity.innerHTML = result.humidity;
         kmin_temp.innerHTML = result.min_temp;
         kmax_temp.innerHTML = result.max_temp;
         kwind_speed.innerHTML = result.wind_speed;
         kwind_degrees.innerHTML = result.wind_degrees;
         ksunrise.innerHTML = result.sunrise;
         ksunset.innerHTML = result.sunset;
        }
        

    } catch (error) {
        console.error(error);
    }

}
forKolkata();
