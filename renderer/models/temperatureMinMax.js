export class temperatureMinMax {
  constructor(Temperature = {}) {
    var self = this;

    self.maxTemperature = `${Temperature.Maximum.Value} °C` || "";
    self.minTemperature = `${Temperature.Minimum.Value} °C` || "";
  }

  getMaxTemperature() {
    return this.max;
  }

  getMinTemperature() {
    return this.min;
  }
  
}