export class dailyForecastViewModel {
  constructor() {
    var self = this;

    self.data = ko.observableArray([]);
  }

  updateData(Array) {
    this.data(Array);
  }

  getData() {
    return this.data;
  }

}