export class temperatureMinMax {
  constructor(Temperature = {}) {
    var self = this;

    self.maxTemperature = `${Temperature.Maximum.Value}` || "";
    self.minTemperature = `${Temperature.Minimum.Value}` || "";
  }

  getMaxTemperature() {
    return this.max;
  }

  getMinTemperature() {
    return this.min;
  }
}