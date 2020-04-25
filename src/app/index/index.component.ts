import { state, FiveDaysForecast, DailyForecast } from './../app.def';
import { DialogComponent } from './../dialog/dialog.component';
import { Weather } from "./../weather.model";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppService } from "../app.service";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from "@angular/material/dialog";


@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  weather: Weather[] = [];
  public defaultData: any;
  public weatherData: any;
  public moreWeatherData: any;
  public forecasts: DailyForecast[];
  isLoading = false;
  removeDefault = true;
  errorHandle=false;
  breakpoint: number;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""],
    });

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 5;

    //Get Tel Aviv weather when init component for default weather
    this.appService.getTLVWeather().subscribe((data) => {
      this.moreWeatherData = data;
      console.log(this.moreWeatherData);
    });

  }

  onVoted(agreed: boolean) {
    if(agreed["checked"]){
      document.querySelector("body > app-root > main > app-index > div > mat-tab-group").className+=" darkBody";
      document.querySelector("#mat-tab-content-0-0 > div > form > button").className+=" darkButton";
      agreed["checked"]=false;
    }
    else{
      document.querySelector("body > app-root > main > app-index > div > mat-tab-group").classList.remove("darkBody");
      document.querySelector("#mat-tab-content-0-0 > div > form > button").classList.remove("darkButton");
      agreed["checked"]=true;
    }
  }

  sendToAccuWeather(formValues) {
    this.isLoading = true;
    this.appService
      .getWeatherInput(formValues.location)
      .subscribe((weather: Weather[]) => {
        this.weatherData = weather;
        if (this.weatherData[0] === undefined) {
          this.openDialog();
          this.errorHandle=true;
        } else {
          this.getCityWeather(this.weatherData[0]["Key"]);
          this.isLoading = false;
          this.removeDefault = false;
        }
        //console.log(this.weatherData[0]);
      });
  }

  getCityWeather(cityKey) {

    this.appService
      .getCurrentConditions(cityKey)
      .subscribe((weather: Weather[]) => {
        this.moreWeatherData = weather;
        //console.log(weather);
        this.removeDefault = false;
      });

      this.appService
      .get5DaysForecasts(cityKey)
      .subscribe((fiveDaysForecastData: FiveDaysForecast) => {
        this.forecasts = fiveDaysForecastData.DailyForecasts;
        console.log(this.forecasts);
      });
  }
  openDialog() {
    this.isLoading = false;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogComponent,dialogConfig);
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 5;
  }
}
