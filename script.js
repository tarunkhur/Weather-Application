const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f717058708mshb0326400d4ccf71p1c3443jsncfde195c89f2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandigarh",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        cloud.innerHTML = response.cloud_pct;
        temper.innerHTML = response.temp;
        feel.innerHTML = response.feels_like;
        humid.innerHTML = response.humidity;
        min.innerHTML = response.min_temp;
        max.innerHTML = response.max_temp;
        wSpeed.innerHTML = response.wind_speed;
        wDegree.innerHTML = response.wind_degrees;
        sunR.innerHTML = response.sunrise;
        sunS.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
