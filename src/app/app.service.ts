import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

private API_KEY = 'vANbqTxIhQQPmX2NOxRsf6VxXn2qKJgo';

  constructor(protected http: HttpClient) {
  }


  getWeatherInput(location:string): Observable<any> {
    return this.http.get( 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey='+this.API_KEY+'&q=' + location);
  }

  getCurrentConditions(cityKey:string): Observable<any>{
    return this.http.get('http://dataservice.accuweather.com/currentconditions/v1/'+cityKey+'?apikey='+this.API_KEY);
  }

  getTLVWeather(){
    return this.http.get('http://dataservice.accuweather.com/currentconditions/v1/215854?apikey='+this.API_KEY);
  }

  get5DaysForecasts(cityKey: string): Observable<any> {
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/'+cityKey+'?apikey='+this.API_KEY);
  }

/*
  getGeoPosition(lat: number, lng: number): Observable<any> {

  }

  getAutoComplete(key: string): Observable<any> {

  }
  */
}
