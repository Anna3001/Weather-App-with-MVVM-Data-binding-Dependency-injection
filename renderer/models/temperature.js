export class temperature {
  constructor(Temperature = {}) {
    var self = this;

    self.temperature = `${Temperature.Value}` || "";
  }

  getTemperature() {
    return this.temperature;
  }
}