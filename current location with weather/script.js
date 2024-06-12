const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=13fffd73b599185b816bef7f5ef88bf3&units=metric&q=`;
const API = `https://api.openweathermap.org/data/2.5/weather?appid=13fffd73b599185b816bef7f5ef88bf3&units=metric&`;
//https://api.weatherapi.com/v1/current.json?key=03b4e8ee1aae42febae01433241106&q=washington
//https://api.openweathermap.org/data/2.5/weather?appid=13fffd73b599185b816bef7f5ef88bf3&lat=28.639&lon=76.961


const input = document.querySelector(".search input");
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const search = document.querySelector(".search button");
const weather_img = document.querySelector(".weather-icon");
const display_weather = document.querySelector(".weather");
const error = document.querySelector(".error");
const location_btn = document.querySelector("#location-button");
const weatherUpdate = document.querySelector(".weather-window");
const location_display = document.querySelector(".location");

///input.hide;
//console.log(input);

// window.addEventListener("load", () => {
//     getWeatherUpdate();
// })
function gotLocation(position){
   // console.log(position);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeathLocUpdate(lat, long);
    weatherUpdate.style.display = "block";
    location_display.style.display = "none";
}

function failedToGet(){
 console.log("There was Some Issue");
 
}

location_btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})

search.addEventListener("click", (evt) => {
    //evt.preventDefault(); // do when button will take in form and it act as submit only then use this so that page will not able to refresh
    getWeatherUpdate(input.value);
})





async function getWeatherUpdate(cityVal){
    let response = await fetch(BASE_URL + cityVal);
    if(response.status == 404){
        display_weather.style.display = "none";
        error.style.display = "block";
    }else{
        let data = await response.json();
       // console.log(data);
        temperature.innerText = Math.floor(data.main.temp) + "°C";
        city.innerText = data.name;
        humidity.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weather_img.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weather_img.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_img.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weather_img.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weather_img.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weather_img.src = "images/snow.png";
        }
        display_weather.style.display = "block";
        error.style.display = "none";
    }
}

async function getWeathLocUpdate(latitutde, longitude){

    let response = await fetch(API + `lat=${latitutde}&lon=${longitude}`);
    if(response.status == 404){
        display_weather.style.display = "none";
        error.style.display = "block";
    }else{
        let data = await response.json();
       // console.log(data);
        temperature.innerText = Math.floor(data.main.temp) + "°C";
        city.innerText = data.name;
        humidity.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weather_img.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weather_img.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_img.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weather_img.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weather_img.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weather_img.src = "images/snow.png";
        }
        display_weather.style.display = "block";
        error.style.display = "none";
    }
}