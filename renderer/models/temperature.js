export class temperature {
  constructor(Temperature = {}) {
    var self = this;

    self.temperature = `${Temperature.Value} °C` || "";
  }

  getTemperature() {
    return this.temperature;
  }

}