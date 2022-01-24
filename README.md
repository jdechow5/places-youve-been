Description: function Places()

Test: "Create a place object with properties and keys"
Code: function Places("Rome");
Expected Output: Rome {
  this.name = "rome";
}

Test: "Create a place object with multiple properties"
Code function Places("Rome");
Expected Output: Rome {
  this.name = "rome";
  this.landmarks = ["Sistine Chapel", "Colloseum", "Trevi Fountain"];
  this.timeOfYear = ["Spring", "Summer"];
  this.foods = ["Pizza", "Pasta", "Gelato"];
}

Description: function PlacesToSee();

Test: "It will create a places object to store multiple places"
Code: function PlacesToSee() {
  this.places = {"placesObject"};
}
Expected Output: Undefined

Description: PlacesToSee.prototype.addPlace = function ();

Test: "It will add a place object to our PlaceToSee object"
Code: let placesToSee = new PlacestoSee
placesToSee.addPlace("france")
placesToSee.addPlace("germany")
Expected Output: placesToSee;
France, German - objects

Description: PlacesToSee.prototype.assignId = function ();

Test: "It will add an Id to any new place"
Code: let placesToSee = new PlacesToSee()
placesToSee.assignId("france")
Expected Output: currentId = 0

Description: PlacesToSee.prototype.findPlace = function ();

Test: "It will find a specific place object based on id and a boolean"
Code: let placesToSee = new PlacesToSee()
placesToSee.findPlace("france")
Expected Output: 1 : France

Description: PlacesToSee.prototype.deletePlace = function ();

Test: "It will delete a place and its corresponding id"
Code: let placesToSee = new PlacesToSee();
placesToSee.addPlace("france")
placesToSee.addPlace("germany")
placesToSee.deletePlace("france")
Expected Output: placesToSee();
Germany - object; 
