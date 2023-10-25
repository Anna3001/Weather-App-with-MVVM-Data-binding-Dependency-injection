export class cityViewModel {
  constructor() {
    var self = this;

    self.city = ko.observable("");
  }

  updateData(data) {
    this.city(data.name);
  }
}