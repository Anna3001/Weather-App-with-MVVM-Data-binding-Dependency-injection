import { temperatureMinMax } from "./temperatureMinMax.js";

export class dailyForecast {
  constructor({ Date = "", Temperature = {} }) {
    var self = this;

    var dateString = Date;
    self.date = dateString.split('T')[0];
    self.temperatureMinMax = new temperatureMinMax(Temperature);
  }

}