# Weather Dashboard

A simple and responsive weather dashboard built with HTML, CSS, and JavaScript using the [OpenWeatherMap API](https://openweathermap.org/). It allows users to search for a city and view current weather, a 5-day forecast, and a temperature chart.

---

## Features

- Search for any city to get current weather.
- Display current temperature, weather description, and weather icon.
- Show additional details: feels like temperature, humidity, wind speed, and pressure.
- 5-day forecast with daily temperature and icons.
- Temperature chart for upcoming hours.
- Night mode automatically based on weather icon.

---

## Demo

![Weather Dashboard Screenshot](screenshot.png)  
*(Optional: Add a screenshot of your app here)*

---

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- OpenWeatherMap API

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
2. Open index.html in your browser.

3. Replace YOUR_API_KEY in script.js with your OpenWeatherMap API key.

## Usage

Enter a city name in the search input.
Click the Search button.
The dashboard will display:
Current weather conditions.
Temperature chart for the next few hours.
5-day forecast.

## File Structure
weather-dashboard/
│
├── index.html      # Main HTML file
├── style.css       # Styling for the dashboard
├── script.js       # JavaScript for fetching and displaying weather data
└── README.md       # Project documentation

## Notes

Make sure your API key is active and has access to the OpenWeatherMap API.
The app uses metric units (°C, m/s) by default.
