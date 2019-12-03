import { WebdataService } from './../webdata.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import  {} from 'rxjs';


@Component({
  selector: 'app-weathera',
  templateUrl: './weathera.component.html',
  styleUrls: ['./weathera.component.css']
})
export class WeatheraComponent implements OnInit {
  weather = new FormGroup({
    inputdata : new FormControl('', Validators.required)
  });
  public weatherData : object;
  constructor(private webdataService: WebdataService) { }
    ngOnInit() {
    
    }

  requestData(){
      this.webdataService.getWeather(this.weather.controls['inputdata'].value).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
  });
  }

}
