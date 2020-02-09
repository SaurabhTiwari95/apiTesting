import { Component, OnInit, Input } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-child-weather',
  templateUrl: './child-weather.component.html',
  styleUrls: ['./child-weather.component.scss']
})
export class ChildWeatherComponent implements OnInit {
 
  @Input() dataFromParent : any;

  constructor(public weather: WeatherServiceService) { };

  ngOnInit() {
  }

}
