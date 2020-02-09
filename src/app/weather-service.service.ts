import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  weatherData: any = null;
  weatherDataObj: any;

  constructor(
    public http: HttpClient,
    // http:accessor which access the HttpClient just like an alias 
  ) { }

  // new function to call api

  getWeather() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((weatherDataResponse) => {
      // this action will perform when the data is received from the API
      this.weatherData = weatherDataResponse;
      console.log(Object.keys(this.weatherData[0]).length)//this give the length of the array
       //console.log(this.weatherData);
      //console.log(JSON.stringify(this.weatherData));
    }, (error) => {
      console.log(error);
    });
  }

  getWeatherDynamic(id) {
    this.http.get('https://jsonplaceholder.typicode.com/todos/'+id).subscribe((weatherDataResponse) => {
      // this action will perform when the data is received from the API
      this.weatherDataObj = weatherDataResponse;
    }, (error) => {
      console.log(error);
    });
  }
  

}
