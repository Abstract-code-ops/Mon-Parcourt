// components/blog/WeatherWidget.js
"use client";

import React, { useState, useEffect } from 'react';

// Helper function to interpret WMO weather codes from the API
const getWeatherInfo = (code) => {
    const weatherMap = {
        0: { description: "Clear sky", icon: "☀️" },
        1: { description: "Mainly clear", icon: "🌤️" },
        2: { description: "Partly cloudy", icon: "⛅️" },
        3: { description: "Overcast", icon: "☁️" },
        45: { description: "Fog", icon: "🌫️" },
        48: { description: "Depositing rime fog", icon: "🌫️" },
        51: { description: "Light drizzle", icon: "🌦️" },
        53: { description: "Moderate drizzle", icon: "🌦️" },
        55: { description: "Dense drizzle", icon: "🌦️" },
        61: { description: "Slight rain", icon: "🌧️" },
        63: { description: "Moderate rain", icon: "🌧️" },
        65: { description: "Heavy rain", icon: "🌧️" },
        80: { description: "Slight rain showers", icon: "🌦️" },
        81: { description: "Moderate rain showers", icon: "🌦️" },
        82: { description: "Violent rain showers", icon: "⛈️" },
        95: { description: "Thunderstorm", icon: "⛈️" },
    };
    return weatherMap[code] || { description: "Weather unavailable", icon: "🤷" };
};

export default function WeatherWidget() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("Nicosia"); // Default city
    const [searchTerm, setSearchTerm] = useState("Nicosia");

    // Function to fetch weather for a given latitude and longitude
    const fetchWeather = (latitude, longitude, cityName) => {
        setLoading(true);
        setError(null);
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            .then(response => {
                if (!response.ok) throw new Error('Weather data not available.');
                return response.json();
            })
            .then(data => {
                setWeather(data.current_weather);
                setCity(cityName); // Update city name on successful fetch
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    // Initial load for the default city
    useEffect(() => {
        handleSearch(null, "Nicosia");
    }, []);

    // Function to handle the search submission
    const handleSearch = (e, defaultCity = "") => {
        if (e) e.preventDefault();
        const location = defaultCity || searchTerm;
        if (!location) return;

        setLoading(true);
        // Geocode the city name to get coordinates
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`)
            .then(res => res.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const { latitude, longitude, name } = data.results[0];
                    fetchWeather(latitude, longitude, name);
                } else {
                    throw new Error(`Could not find location: ${location}`);
                }
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    const weatherInfo = weather ? getWeatherInfo(weather.weathercode) : null;

    return (
        <div className="sidebar-widget weather-widget" style={{ textAlign: 'center' }}>
            <div className="widget-title">
                <h3>Weather</h3>
            </div>
            <div className="widget-content p_relative">
                {/* Search Form */}
                <div className="search-box mb_20">
                    <form onSubmit={handleSearch} className="search-form">
                        <div className="form-group">
                            <input
                                type="search"
                                name="search-field"
                                placeholder="Search City..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                required
                            />
                            <button type="submit" style={ {cursor: 'pointer'} }><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>

                {/* Weather Display */}
                <div style={{ minHeight: '120px' }}>
                    {loading && <p style={{ textAlign: 'center' }}>Loading weather...</p>}
                    {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
                    {!loading && !error && weather && weatherInfo && (
                        <div className="weather-content" style={{ textAlign: 'center' }}>
                            <h4 style={{ margin: '0 0 10px 0' }}>{city}</h4>
                            <div style={{ fontSize: '3rem', margin: '10px 0' }}>{weatherInfo.icon}</div>
                            <h4 style={{ margin: '0 0 5px 0' }}>{weather.temperature}°C</h4>
                            <p style={{ margin: 0 }}>{weatherInfo.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
