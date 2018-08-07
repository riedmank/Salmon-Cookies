'use strict';

// table header
var header = ['Store Name', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm',
  '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', 'Total'];

// Store constructor
function Store(name, minCustomers, maxCustomers, avgSales, hourlySales) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.hourlySales = hourlySales;
}

// Creating objects
var firstAndPike = new Store('First and Pike', 23, 65, 6.3, this.cookieSales);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2, this.cookieSales);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7, this.cookieSales);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3, this.cookieSales);
var alki = new Store('alki', 2, 16, 4.6, this.cookieSales);

// Adding prototypes
Store.prototype.randomSales = randomSales;
Store.prototype.hourlySales = cookieSales;
Store.prototype.render = render;

// Calculate random customers and cookie sales
function randomSales() {
  this.minCustomers = Math.ceil(this.minCustomers);
  this.maxCustomers = Math.floor(this.maxCustomers);
  return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgSales;
}

// Add store name, cookie sales, and totals to array
function cookieSales() {
  var cookies = [];
  for(var i = 1; i < 15; i++) {
    cookies[i] = Math.round(this.randomSales());
  }
  cookies.push(cookies.reduce((total, element) => total + element, 0));
  cookies.splice(0, 1, this.name);
  return cookies;
}

// add info to page
function render() {
  var ul = document.getElementById(this.name);
  for(var j = 0; j < 16; j++) {
    var storeInfo = document.createElement('li');
    storeInfo.textContent = this.hourlySales()[j];
    ul.appendChild(storeInfo);
  }
}

var storeObjects = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

for(var i = 0; i < storeObjects.length; i++) {
  storeObjects[i].render();
}