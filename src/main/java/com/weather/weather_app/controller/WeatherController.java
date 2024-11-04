package com.weather.weather_app.controller;


import com.weather.weather_app.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

    @Autowired
    private  WeatherService weatherService;

    @GetMapping("/weather")
    public String getWeather(@RequestParam String city) {
        return weatherService.getWeather(city);
    }

    @GetMapping("/cord")
    public String getCord(@RequestParam("lat") String lat, @RequestParam("lon") String lon){
        return weatherService.getCord(lat, lon);
    }}
