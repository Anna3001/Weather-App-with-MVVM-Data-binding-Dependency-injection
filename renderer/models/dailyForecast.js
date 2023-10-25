export class dailyForecastM {
  constructor({ Date = "", Temperature = {} }) {
    var self = this;

    dateString = Date;

    self.date = dateString.split('T')[0];
    self.temperatureMinMax = new temperatureMinMax(Temperature);
  }

}