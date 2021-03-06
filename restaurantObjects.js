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

var apple       = new FoodItem('Apple', 76, true, true, false);
var bagel       = new FoodItem('Bagel', 185, false, false, true);
var doughnut    = new FoodItem('Doughnut', 360, false, false, false);
var coke        = new FoodItem('Coke', 120, false, false, false);
var rum         = new FoodItem('Rum', 360, false, false, true);
var orangeJuice = new FoodItem('Orange Juice', 120, true, true, false);
var chicken     = new FoodItem('Chicken', 400, false, true, true);
var pasta       = new FoodItem('Pasta', 150, true, false, true);
var sauce       = new FoodItem('Sauce', 220, true, true, true);
var bun         = new FoodItem('Bun', 180, true, false, true);
var burger      = new FoodItem('Burger', 440, false, true, true);
// console.log(apple.stringify());

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

var rumAndCoke = new Drink('Coke and Rum', "It's rum in coke pal", 6, [rum, coke])
// console.log(rumAndCoke.stringify())

var orangeJuice = new Drink('Orange Juice', 'Citrussy Delicious', 4, [orangeJuice])
// PLATE //

function Plate(name, description, price, ingredients) {
  this.name        = name;
  this.description = description;
  this.price       = price;
  this.ingredients = ingredients;
}

Plate.prototype.stringify = function() {
  var info = "Name: " + this.name + " Description: " + this.description + " Price: "
             + this.price + " Ingredients: ";
  var ingredients = []
  for (i=0; i < this.ingredients.length; i++) {
    ingredients.push(' ' + this.ingredients[i].name);
  }
  return info += ingredients;
}

Plate.prototype.isVegan = function() {
  for (i = 0; i < this.ingredients; i++) {
    if (this.ingredients[i].vegan == false) {
      return false;
    } else {
      return true;
    }
  }
}

Plate.prototype.isGlutenFree = function() {
  for (i = 0; i < this.ingredients; i++) {
    if (this.ingredients[i].glutenFree == false) {
      return false;
    } else {
      return true;
    }
  }
}

Plate.prototype.isCitrusFree = function() {
  for (i = 0; i < this.ingredients; i++) {
    if (this.ingredients[i].citrusFree == false) {
      return false;
    } else {
      return true;
    }
  }
}

var chickParm = new Plate('Chicken Parmesan', 'A lovely blend of angel hair pasta with marinara and parmesan crusted chicken breast',
                          13.95, [chicken, pasta, sauce])
var burger = new Plate('Cheese Burger', '1/2 pound pre-cook buffalo burger with choice of cheese and option of bacon',
                          11.95, [bun, burger])
var breakfast = new Plate('Breakfast', 'healthy meal to start your day',
                          11.95, [apple, bagel])

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
// console.log(myOrder.stringify());

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
// console.log(myMenu.stringify());

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
// console.log(myRestaurant.stringify());

// CUSTOMER //

function Customer(diet) {
  this.diet = diet;
}
