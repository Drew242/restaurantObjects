// FOOD ITEM //
function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
  this.name       = name;
  this.calories   = calories;
  this.vegan      = vegan;
  this.glutenFree = glutenFree;
  this.citrusFree = citrusFree;
}

FoodItem.prototype.stringify = function(foodItem) {
  var info =  "Item: " + this.name + " Calories: " + this.calories + " Vegan: "
              + this.vegan + " Gluten Free: " + this.glutenFree + " Citrus Free: "
              + this.citrusFree;
  return info;
}

var apple    = new FoodItem('Apple', 76, true, true, false);
var bagel    = new FoodItem('Bagel', 185, false, false, true);
var doughnut = new FoodItem('Doughnut', 360, false, false, false);
console.log(apple.stringify());
console.log(bagel.stringify());
console.log(doughnut.stringify());
// DRINK //

// PLATE //

// ORDER //
