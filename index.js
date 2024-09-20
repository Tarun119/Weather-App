
const apiKey = "bdb079a94ad5cccbbcf58d544ea54b1b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const city = document.querySelector(".searchBox");
const btn= document.querySelector(".searchBtn");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404 || response.status==400){
        error();
    }else{
        // document.querySelector(".none").style.display=none;
        document.querySelector(".error h3").innerHTML="";
        const d=new Date();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".weather").innerHTML=data.weather[0].main;
        document.querySelector(".date").innerHTML=d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
        document.querySelector(".temperature").innerHTML=(data.main.temp-273.5).toFixed(2)+"°c";
        document.querySelector(".humidity").innerHTML="Humidity: "+data.main.humidity+"%";
        document.querySelector(".wind").innerHTML="Wind Speed: "+data.wind.speed+"m/s";
    }
    console.log(data);
}
function error(){
    document.querySelector(".error h3").innerHTML="Invalid city name";
    document.querySelector("data").style.display=hidden;
}

btn.addEventListener("click", ()=>{
    checkWeather(city.value);
})
// checkWeather();