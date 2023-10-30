import { cityViewModel } from "./cityViewModel.js"
import { currentWeatherViewModel } from "./currentWeatherViewModel.js"
import { fiveDaysForecastViewModel } from "./fiveDaysForecastViewModel.js"
import { twelveHoursForecastViewModel } from "./twelveHoursForecastViewModel.js";
import { oneHourForecastViewModel } from "./oneHourForecastViewModel.js"
import { oneDayForecastViewModel } from "./oneDayForecastViewModel.js";

import { getNewDataAndUpdate } from "../services/accuWeatherService.js"

export let mainVM

export class mainViewModel {
  constructor () {
    var self = this;
    
    self.cityVM = new cityViewModel();  
    self.currentWeatherVM = new currentWeatherViewModel();  
    self.oneHourForecastVM = new oneHourForecastViewModel();  
    self.oneDayForecastVM = new oneDayForecastViewModel();  
    self.fiveDaysForecastVM = new fiveDaysForecastViewModel();
    self.twelveHoursForecastVM = new twelveHoursForecastViewModel(); 

    self.getCityInformation = function (f) {
      const cityF = document.querySelector('input').value;
      getNewDataAndUpdate(cityF);
    };  
  }

  getCity() {
    return this.cityVM;
  }

  getWeather() {
    return this.currentWeatherVM;
  }

  getOneHourForecast() {
    return this.oneHourForecastVM;
  }

  getTwelveHoursForecast() {
    return this.twelveHoursForecastVM;
  }

  getOneDayForecast() {
    return this.oneDayForecastVM;
  }

  getFiveDaysForecast() {
    return this.fiveDaysForecastVM;
  }
}

window.onload = function() {
    mainVM = new mainViewModel ();
    ko.applyBindings(mainVM, document.querySelector("#knockout-app"));
}  