function PlacesToSee() {
  this.places = {};
  this.currentId = 0;
}

PlacesToSee.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlacesToSee.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

PlacesToSee.prototype.findPlace = function (id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return false;
};

PlacesToSee.prototype.deletePlace = function (id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
}

function Place(name, landmarks, timeOfYear, foods) {
  this.name = name;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.foods = foods;
  // this.id = 0;
}

// Place.prototype.assignId = function () {
//   this.id += 1;
//   return this.id;
// }

let france = new Place("France", ["Eiffle Tower", "Seine", "Louvre"], ["Summer", "Fall"], ["Baguettes", "Cheese", "Wine"]);
let germany = new Place("Germany", ["Brandenburg Gate", "Oktoberfest", "Disney Looking Castles", "Horsey Farms"], ["Winter", "Summer"], ["Brats", "Beers", "Schnitzel"]);

let italy = new Place("Italy", ["Rome", "Colloseum", "Trevi Fountain", "Pig Farms"], ["Winter", "Summer"], ["Pizza", "Pasta", "Gabagooooool"]);

let placelist = new PlacesToSee();

function AddressBook() {
  this.contacts = {};
}

AddressBook.prototype.addContact = function (contact) {
  this.contacts[contact.firstName] = contact;
};