# Weather App

A modern, responsive weather web application that allows users to search for the current weather and a 3-day forecast for any city. The app also features a contact page and a subscription form, and automatically detects the user's location on load to display relevant weather information. Users can search for other locations as well.

## Features

- **Current Weather**: Displays temperature, weather condition, wind speed, UV index, and wind direction for the selected city.
- **3-Day Forecast**: Shows the weather forecast for the next two days, including max/min temperatures and weather icons.
- **Location Detection**: Automatically detects the user's city using their IP address on first load.
- **Search Functionality**: Users can search for weather in any city using the search bar.
- **Contact Page**: Includes a contact form for user inquiries.
- **Subscription Form**: Users can enter their email to subscribe (UI only).
- **Responsive Design**: Built with Bootstrap and custom CSS for a seamless experience on all devices.
- **Modern UI**: Clean, visually appealing interface with loading placeholders and weather icons.

## Technologies Used

- HTML5 & CSS3
- Bootstrap 5
- JavaScript (ES6)
- [WeatherAPI.com](https://www.weatherapi.com/) for weather data
- [ipapi.co](https://ipapi.co/) for IP-based location detection
- [ipify.org](https://www.ipify.org/) for getting IP address

## How It Works

1. On page load, the app attempts to detect the user's city using their IP address.
2. Weather data for the detected (or searched) city is fetched from WeatherAPI.com.
3. The UI displays the current weather and a 3-day forecast.
4. Users can search for any city to update the displayed weather information.
5. The contact page allows users to send inquiries (form is UI only).

## Project Structure

```
Weather-App/
│
├── index.html                # Main HTML file
├── contact.html              # Contact page
├── README.md                 # Project documentation
│
├── css/                      # Stylesheets
│   ├── all.min.css
│   ├── bootstrap.min.css
│   ├── media.css
│   ├── style.css
│   └── styleForContact.css
│
├── js/                       # JavaScript files
│   ├── bootstrap.bundle.min.js
│   ├── main.js
│   └── contact.js
│
├── images/                   # App images and icons
│   ├── banner.jpg
│   └── logo@2x.png
│
└── webfonts/                 # Font Awesome files

```

## Setup & Usage

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Enter a city name in the search bar to view its weather, or let the app detect your location automatically.
4. Visit `contact.html` for the contact form.

## Credits

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Location detection by [ipapi.co](https://ipapi.co/)
- IP address by [ipify.org](https://www.ipify.org/)
- UI design inspired by Themezy

---

**This project is for educational purposes only.**

