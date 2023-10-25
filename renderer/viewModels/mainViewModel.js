import { cityViewModel } from "./cityViewModel.js"
import { currentWeatherViewModel } from "./currentWeatherViewModel.js"
import { dailyForecastViewModel } from "./dailyForecastViewModel.js"
import { hourlyForecastViewModel } from "./hourlyForecastViewModel.js"

import { getNewDataAndUpdate } from "../services/accuWeatherService.js"

export class mainViewModel {
  constructor () {
    var self = this;
    
    self.cityVM = new cityViewModel();
    self.currentWeatherVM = new currentWeatherViewModel();
    self.dailyForecastVM = new dailyForecastViewModel();
    self.hourlyForecastVM = new hourlyForecastViewModel();

    self.getCityInformation = function (f) {
      const cityF = document.querySelector('form').value;
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
    return this.hourlyForecastVM;
  }

  getTwelveHoursForecast() {
    return this.hourlyForecastVM;
  }

  getOneDayForecast() {
    return this.dailyForecastVM;
  }

  getFiveDaysForecast() {
    return this.dailyForecastVM;
  }
}

window.onload = function() {
    const mainVM = new mainViewModel ();
    ko.applyBindings(mainVM, document.querySelector("#knockout-app"));
}  