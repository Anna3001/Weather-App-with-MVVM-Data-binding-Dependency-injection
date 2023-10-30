export class currentWeatherViewModel {
  constructor() {
    var self = this;

    self.temperature = ko.observable("");
  }

  updateData(data) { 
    this.temperature(data.temperature.getTemperature());
  }
}