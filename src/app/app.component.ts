import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'apiTesting';
  id: string;

  constructor(public weather: WeatherServiceService) { };

  OnClick() {
    this.weather.getWeather();
  }
  GetDataById() {
    this.weather.getWeatherDynamic(this.id);
  }
  ngOnInit() {
    // this.weather.getWeather();
  }
}

