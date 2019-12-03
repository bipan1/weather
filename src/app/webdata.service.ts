import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebdataService {
  text : string;

  constructor(private http: HttpClient) {}

  getWeather(location : string){
    //this.text = "api.openweathermap.org/data/2.5/weather?q=London,uk";
    return this.http.get("http://api.weatherstack.com/current?access_key=3401f3b2537e5d47dd5c4286149ee14f&query="+location)
  }
}
