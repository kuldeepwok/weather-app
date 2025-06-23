async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "9a77bf63381409d4e4db55fb0ba3dd77";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌥️ Condition: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>❌ City not found. Please try again.</p>`;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>⚠️ Error fetching weather data.</p>`;
  }
}
