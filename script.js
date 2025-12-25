const apiKey = "YOUR_API_KEY"

const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn")
const app = document.querySelector(".app")

const cityEl = document.getElementById("city")
const tempEl = document.getElementById("temp")
const descEl = document.getElementById("desc")
const iconEl = document.getElementById("icon")

const feelsEl = document.getElementById("feels")
const humidityEl = document.getElementById("humidity")
const windEl = document.getElementById("wind")
const pressureEl = document.getElementById("pressure")

const forecastEl = document.getElementById("forecast")
const canvas = document.getElementById("chart")
const ctx = canvas.getContext("2d")

searchBtn.onclick = () => {
  if (cityInput.value) getWeather(cityInput.value)
}

async function getWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )

  if (!res.ok) {
    alert("City not found or API key inactive")
    return
  }

  const data = await res.json()

  cityEl.textContent = data.name
  tempEl.textContent = Math.round(data.main.temp) + "°C"
  descEl.textContent = data.weather[0].description

  feelsEl.textContent = Math.round(data.main.feels_like) + "°C"
  humidityEl.textContent = data.main.humidity + "%"
  windEl.textContent = data.wind.speed + " m/s"
  pressureEl.textContent = data.main.pressure + " hPa"

  const icon = data.weather[0].icon
  iconEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

  app.classList.toggle("night", icon.includes("n"))

  getForecast(city)
}

async function getForecast(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
  )

  const data = await res.json()

  forecastEl.innerHTML = ""
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const points = data.list.slice(0, 8)
  drawChart(points.map(p => p.main.temp))

  const days = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0,5)

  days.forEach(d => {
    const date = new Date(d.dt * 1000)
    const div = document.createElement("div")
    div.className = "day"
    div.innerHTML = `
      <div>${date.toLocaleDateString("en-US",{weekday:"short"})}</div>
      <img src="https://openweathermap.org/img/wn/${d.weather[0].icon}.png">
      <div>${Math.round(d.main.temp)}°</div>
    `
    forecastEl.appendChild(div)
  })
}

function drawChart(temps) {
  const max = Math.max(...temps)
  const min = Math.min(...temps)

  ctx.strokeStyle = "#000"
  ctx.lineWidth = 2
  ctx.beginPath()

  temps.forEach((t, i) => {
    const x = (i / (temps.length - 1)) * canvas.width
    const y = canvas.height - ((t - min) / (max - min)) * canvas.height
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  })

  ctx.stroke()
}

