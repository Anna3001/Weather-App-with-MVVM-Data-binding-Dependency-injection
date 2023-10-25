export class cityM {
  constructor({ Key = "", Country = {} }) {
    var self = this;

    self.name = Country.LocalizedName || "";
    self.key = Key;
  }
}