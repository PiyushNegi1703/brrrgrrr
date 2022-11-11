// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
const Rs = document.getElementById('Rs');

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById('cheese')

  if (state.Cheese) {
    cheese.style.display = 'inherit';
  }
  else {
    cheese.style.display = 'none';
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById('tomato')

  if (state.Tomatoes) {
    tomatoes.style.display = 'inherit';
  }
  else {
    tomatoes.style.display = 'none';
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.getElementById('onion')

  if (state.Onions) {
    onions.style.display = 'inherit';
  }
  else {
    onions.style.display = 'none';
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById('lettuce')

  if (state.Lettuce) {
    lettuce.style.display = 'inherit';
  }
  else {
    lettuce.style.display = 'none';
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPatty1();
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderCheese1();
  renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderTomatoes1();
  renderAll();
}


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderOnions1();
  renderAll();
}


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderLettuce1();
  renderAll();
}


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  if (state.Patty) {
    document.querySelector('.btn-patty').classList.add('active')
  }
  else {
    document.querySelector('.btn-patty').classList.remove('active')
  }

  if (state.Cheese) {
    document.querySelector('.btn-cheese').classList.add('active')
  }
  else {
    document.querySelector('.btn-cheese').classList.remove('active')
  }

  if (state.Tomatoes) {
    document.querySelector('.btn-tomatoes').classList.add('active')
  }
  else {
    document.querySelector('.btn-tomatoes').classList.remove('active')
  }

  if (state.Onions) {
    document.querySelector('.btn-onions').classList.add('active')
  }
  else {
    document.querySelector('.btn-onions').classList.remove('active')
  }

  if (state.Lettuce) {
    document.querySelector('.btn-lettuce').classList.add('active')
  }
  else {
    document.querySelector('.btn-lettuce').classList.remove('active')
  }
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  if (state.Patty) {
    document.getElementById('ing-patty').classList.remove('items')
  }
  else {
    document.getElementById('ing-patty').classList.add('items')
  }

  if (state.Cheese) {
    document.getElementById('ing-cheese').classList.remove('items')
  }
  else {
    document.getElementById('ing-cheese').classList.add('items')
  }

  if (state.Tomatoes) {
    document.getElementById('ing-tomato').classList.remove('items')
  }
  else {
    document.getElementById('ing-tomato').classList.add('items')
  }

  if (state.Onions) {
    document.getElementById('ing-onion').classList.remove('items')
  }
  else {
    document.getElementById('ing-onion').classList.add('items')
  }

  if (state.Lettuce) {
    document.getElementById('ing-lettuce').classList.remove('items')
  }
  else {
    document.getElementById('ing-lettuce').classList.add('items')
  }
}

renderAll();

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
  Rs.innerText = wholeWheatBun;
}

function renderPatty1() {
  if (state.Patty) {
    wholeWheatBun += ingredients.Patty;
  }
  else {
    wholeWheatBun -= ingredients.Patty;
  }
}

function renderCheese1() {
  if (state.Cheese) {
    wholeWheatBun += ingredients.Cheese;
  }
  else {
    wholeWheatBun -= ingredients.Cheese;
  }
}

function renderTomatoes1() {
  if (state.Tomatoes) {
    wholeWheatBun += ingredients.Tomatoes;
  }
  else {
    wholeWheatBun -= ingredients.Tomatoes;
  }
}

function renderOnions1() {
  if (state.Onions) {
    wholeWheatBun += ingredients.Onions;
  }
  else {
    wholeWheatBun -= ingredients.Onions;
  }
}

function renderLettuce1() {
  if (state.Lettuce) {
    wholeWheatBun += ingredients.Lettuce;
  }
  else {
    wholeWheatBun -= ingredients.Lettuce;
  }
}