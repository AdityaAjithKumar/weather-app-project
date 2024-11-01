package com.weather.weather_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private static final String BASE_URL = "http://api.weatherapi.com/v1/current.json";
    private static final String API_KEY = "98c5889e77ed4611a83121300240111"; // Replace with your actual API key

    @Autowired
    private RestTemplate restTemplate;

    public String getWeather(String city) {
        String url = BASE_URL + "?key=" + API_KEY + "&q=" + city;
        System.out.println( restTemplate.getForObject(url, String.class));
        return restTemplate.getForObject(url, String.class);
    }
}
