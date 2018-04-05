import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService {
  constructor(private http: Http) {

  }

  getTemp(cityName: String) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=f15314a3752ff28134ea32279d0e7a61&units=metric&q=' + cityName;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson.main.temp)
  }
}
