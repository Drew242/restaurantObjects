// FOOD ITEM //

function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
  this.name       = name;
  this.calories   = calories;
  this.vegan      = vegan;
  this.glutenFree = glutenFree;
  this.citrusFree = citrusFree;
}

FoodItem.prototype.stringify = function() {
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

function Drink(name, description, price, ingredients) {
  this.name        = name;
  this.description = description;
  this.price       = price;
  this.ingredients = ingredients;
}

Drink.prototype.stringify = function() {
  var info = "Name: " + this.name + " Description: " + this.description + " Price: "
             + this.price + " Ingredients: " + this.ingredients;
  return info;
}

var rumAndCoke = new Drink('Coke and Rum', "It's rum in coke pal", 6, ['rum', 'ice', 'coke'])
console.log(rumAndCoke.stringify())

// PLATE //

function Plate(name, description, price, ingredients) {
  this.name        = name;
  this.description = description;
  this.price       = price;
  this.ingredients = ingredients;
}

Plate.prototype.stringify = function() {
  var info = "Name: " + this.name + " Description: " + this.description + " Price: "
             + this.price + " Ingredients: " + this.ingredients;
  return info;
}

Plate.prototype.isVegan = function() {

}

Plate.prototype.isGlutenFree = function() {

}

Plate.prototype.isCitrusFree = function() {
  
}

var chickParm = new Plate('Chicken Parmesan', 'A lovely blend of angel hair pasta with marinara and parmesan crusted chicken breast',
                          13.95, ['chicken', 'pasta', 'marinara sauce', 'breadcrumbs', 'eggwhites', 'mushrooms', 'onions'])
var burger = new Plate('Cheese Burger', '1/2 pound pre-cook buffalo burger with choice of cheese and option of bacon',
                          11.95, ['bun', 'ground bison', 'lettuce', 'tomato', 'onion', 'pepperjack cheese', 'bacon'])
console.log(chickParm.stringify())
console.log(burger.stringify())

// ORDER //

function Order(plates) {
  this.plates = plates;
}

Order.prototype.stringify = function() {
  var info = []
  for ( i = 0; i < this['plates'].length; i++ ) {
    info.push(this['plates'][i].stringify());
  }
  return info;
}
var myOrder = new Order([chickParm, burger]);
console.log(myOrder.stringify());

// MENU //

function Menu(plates) {
  this.plates = plates;
}
Menu.prototype.stringify = function() {
  var info = []
  for ( i = 0; i < this['plates'].length; i++ ) {
    info.push(this['plates'][i].stringify());
  }
  return info;
}
var myMenu = new Menu([chickParm, burger]);
console.log(myMenu.stringify());

// RESTAURANT //

function Restaurant(name, description, menu) {
  this.name        = name;
  this.description = description;
  this.menu        = menu;
}
Restaurant.prototype.stringify = function(name, description, menu) {
  var info = 'Name: ' + this.name + 'Description: ' + this.description +
             'Menu: ' + this.menu.stringify();
  return info;
}
var myRestaurant = new Restaurant("Clay's Cupcake Corner", "Make no mistakery, this is the greatest cupcakery",
                                  myMenu);
console.log(myRestaurant.stringify());

// CUSTOMER //

function Customer(diet) {
  this.diet = diet;
}
