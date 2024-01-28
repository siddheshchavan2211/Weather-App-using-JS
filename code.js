//const response = await fetch(apiUrl + '&appid=${apiKey}');
//storing data in 'data'
const apiKey = "ae066ebb3b678578ff83480cfabb4461";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const whicon = document.querySelector(".wh-icon");
async function AnalyzeWhether(city){
const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

const data = await response.json();
document.querySelector (".city").innerHTML= data.name;
document.querySelector (".temperature").innerHTML= Math.round(data.main.temp) + " °c";
document.querySelector (".humdity").innerHTML= data.main.humidity + " %";
document.querySelector (".wind").innerHTML= data.wind.speed + " Km/h"

    if(data.weather[0].main == "Clouds"){
        whicon.src = "Images/6.png";
    }
    else if(data.weather[0].main == "Clear"){
        whicon.src = "Images/1.png";
    }
    else if(data.weather[0].main == "Rain"){
        whicon.src = "Images/5.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        whicon.src = "Images/2.png";
    }
    else if(data.weather[0].main == "Mist"){
        whicon.src = "Images/4.png";
    }

    document.querySelector(".err").style.display = "none ";

}


searchBtn.addEventListener("click", ()=>{
AnalyzeWhether(searchBox.value);
})