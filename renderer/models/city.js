export class city {
  constructor({ Key = "", EnglishName = {} }) {
    var self = this;

    self.name = EnglishName || "";
    self.key = Key;
  }
}