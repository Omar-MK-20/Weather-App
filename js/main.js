const apiKey = 'eeb54e5c0b1c48ed9cb125827251504';
// =======================================================================================
let weatherData = {};
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const directions = {
    N: "North",
    E: "East",
    S: "South",
    W: "West",
    NE: "Northeast",
    SE: "Southeast",
    SW: "Southwest",
    NW: "Northwest",
    NNE: "North-Northeast",
    ENE: "East-Northeast",
    ESE: "East-Southeast",
    SSE: "South-Southeast",
    SSW: "South-Southwest",
    WSW: "West-Southwest",
    WNW: "West-Northwest",
    NNW: "North-Northwest"
};

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');


// =======================================================================================
// function to get the wather data
async function getWeather(city) 
{
    try
    {
        let cityName;
        if(!city)
        {
            cityName = await getCityName();
        }
        else
        {
            cityName = city;
        }
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=3&aqi=no&alerts=no`);
        if(!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);
        }
        weatherData = await response.json();
        console.log(weatherData);
        // let date = new Date(weatherData.current.last_updated).getDay();
        // console.log(new Date(weatherData.current.last_updated).toString().split(' ').splice(1,2).join(' '));

        // console.log('getWeather: ',cityName);
        // console.log('getWeather: ',weatherData);
        displayWeather();

    }
    catch(error)
    {
        console.log(`Error fetching weather data: ${error.message}`);
    }
}



// function to get the IP address from the user.
async function getIP() 
{
    try 
    {
        const response = await fetch('https://api.ipify.org/?format=json')
        if(response.status === 429)
        {
            throw new Error(`Rate limit exceeded. Try again later.`);
        }
        if(!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        ip = data.ip;
        console.log(data.ip);
        return data.ip;
    } 
    catch (error) 
    {
        console.error(`Error fetching IP address: ${error}`);
    }
}


// function to get the city from the ip address of the user.
async function getCityName()
{
    try
    {
        let ip = await getIP();
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        if(!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        if(data.ip == 'undefined')
        {
            throw new Error(`IP address is undefined`);
        }
        cityName = data.city;
        console.log(data);
        return data.city;
    }
    catch
    {
        // console.log(`Error getting city name:, ${error}`);
        let errorCity = prompt(`Couldn't get city name, Enter your city name`);
        console.log(errorCity);
        return errorCity
    }
}


getWeather();





// =======================================================================================
// function to display weather

const weatherTags = document.getElementById('weatherTags');
// console.log(weatherTags);


function displayWeather()
{
    let cartona = `
            <div class="row g-1">
                <div class="col-12 text-center shadow-lg">
                    <div class="card border-0">
                        <div class="card-header d-flex justify-content-between text-secondary">
                            <span>${weekday[new Date(weatherData.current.last_updated).getDay()]}</span>
                            <span>${(new Date(weatherData.current.last_updated).toString().split(' ').splice(1,2).join(' '))}</span>
                        </div>
                        <div class="card-body text-white">
                            <h2 class="h5 fw-light">${weatherData.location.name}</h2>
                            <h2 class="fw-bolder fa-4x">${weatherData.current.temp_c}<sup>o</sup>C<span><img src="http:${weatherData.current.condition.icon}" alt=""></span></h2>
                            <p class="fw-lighter text-info">${weatherData.current.condition.text}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between text-secondary">
                            <span><i class="fa-solid fa-umbrella"></i> ${weatherData.current.uv}%</span>
                            <span><i class="fa-solid fa-wind"></i> ${weatherData.current.wind_kph}km/h</span>
                            <span><i class="fa-regular fa-compass"></i> ${directions[weatherData.current.wind_dir]}</span>
                        </div>
                    </div>
                </div>

                <div class="col-6 text-center shadow-lg">
                    <div class="card border-0 ">
                        <div class="card-header d-flex justify-content-between text-secondary">
                            <span>${weekday[new Date(weatherData.forecast.forecastday[1].date).getDay()]}</span>
                        </div>
                        <div class="card-body text-white">
                            <div><img src="http:${weatherData.forecast.forecastday[1].day.condition.icon}" alt=""></div>
                            <h2 class="h2">${weatherData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
                            <p class="fw-lighter text-secondary">${weatherData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
                            <p class="fw-lighter text-info">${weatherData.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                    </div>
                </div>

                <div class="col-6 text-center shadow-lg">
                    <div class="card border-0 ">
                        <div class="card-header d-flex justify-content-between text-secondary">
                            <span>${weekday[new Date(weatherData.forecast.forecastday[2].date).getDay()]}</span>
                        </div>
                        <div class="card-body text-white">
                            <div><img src="http:${weatherData.forecast.forecastday[2].day.condition.icon}" alt=""></div>
                            <h2 class="h2">${weatherData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
                            <p class="fw-lighter text-secondary">${weatherData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
                            <p class="fw-lighter text-info">${weatherData.forecast.forecastday[2].day.condition.text}</p>
                        </div>
                    </div>
                </div>

            </div>`

    weatherTags.innerHTML = cartona;
}


// =======================================================================================
// adding search functionality

searchInput.addEventListener('keyup', function(e)
{
    // getWeather()
    if(searchInput.value)
    {
        // console.log(searchInput.value);
        getWeather(searchInput.value);
    }
    
});


// =======================================================================================
