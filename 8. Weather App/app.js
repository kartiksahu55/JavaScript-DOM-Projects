const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
// const Api="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric"

const searchBox = document.getElementById("searchBox");
const weather = document.getElementById("weather");

const getWeather = async (city) => {
    weather.innerHTML = `
        <h2>
          Loading...
        </h2>
        
        `;
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(API);
  const data = await response.json();
  setWeatherData(data);
};

const setWeatherData = (data) => {
    
    console.log(data);
    if(data.cod=="404"){
        weather.innerHTML = `
        <div>
          <h2>City not found</h2>
        </div>
        `;
    }else{
        weather.innerHTML = `
            <div>
              <img
                src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                height="100px"
                alt="weather"
              />
            </div>
            <div>
              <h2>${data.name}</h2>
              <h2>${data.main.temp} ०C</h2>
              <h4>${data.weather[0].main}</h4>
            </div>
            `;
    }

};

searchBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getWeather(event.target.value);
  }
});
