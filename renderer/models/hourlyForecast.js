import { temperature } from "./temperature.js";

export class hourlyForecast {
  constructor({ DateTime = "", Temperature = {}}) {
    var self = this;

    const date = new Date(DateTime);

    self.moment = `${date.getHours()}:${date.getMinutes()}`;

    if (Temperature.Metric) {
      self.temperature = new temperature(Temperature.Metric);
    } else {
      self.temperature = new temperature(Temperature);
    }
  }  
  
}