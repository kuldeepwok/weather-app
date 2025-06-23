async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "9a77bf63381409d4e4db55fb0ba3dd77";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const result = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>🌡️ Temp:</strong> ${data.main.temp}°C</p>
      <p><strong>☁️ Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>💨 Wind:</strong> ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } else {
    document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`;
  }
}