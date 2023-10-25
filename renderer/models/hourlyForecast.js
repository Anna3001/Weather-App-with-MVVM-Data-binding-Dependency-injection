export class hourlyForecastM {
  constructor({ DateTime = "", Temperature }) {
    var self = this;

    const date = new Date(DateTime);

    self.time = `${date.getHours()}:${date.getMinutes()}`;
  }  
}