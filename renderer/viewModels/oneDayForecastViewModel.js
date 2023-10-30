export class oneDayForecastViewModel {
  constructor() {
    var self = this;

    self.data = ko.observable("");
  }

  updateData(d) {
    this.data(d);
  }

  getData() {
    return this.data;
  }

}