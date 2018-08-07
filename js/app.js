'use strict';

// table header
var header = ['Store Name', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
  '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', 'Total'];

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
var alki = new Store('Alki', 2, 16, 4.6, this.cookieSales);

// Adding prototypes
Store.prototype.randomSales = randomSales;
Store.prototype.hourlySales = cookieSales;
Store.prototype.renderStoreInfo = renderStoreInfo;

// Calculate random customers and cookie sales
function randomSales() {
  this.minCustomers = Math.ceil(this.minCustomers);
  this.maxCustomers = Math.floor(this.maxCustomers);
  return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgSales;
}

// Add store name, cookie sales, and totals to array
function cookieSales() {
  var cookies = [];
  for(var i = 0; i <= 15; i++) {
    cookies[i] = Math.round(this.randomSales());
  }
  cookies.push(cookies.reduce((total, element) => total + element, 0));
  cookies.splice(0, 1, this.name);
  return cookies;
}

// add info to page
function renderStoreInfo() {
  var tbody = document.getElementById('body');
  var storeInfo = document.createElement('tr');
  for(var j = 0; j < 17; j++) {
    var storeSales = document.createElement('td');
    storeSales.textContent = this.hourlySales()[j];
    storeInfo.appendChild(storeSales);
  }
  tbody.appendChild(storeInfo);
}

function renderHeader() {
  var theader = document.getElementById('head');
  var heading = document.createElement('tr');
  for (var i = 0; i < header.length; i++) {
    var headContent = document.createElement('td');
    headContent.textContent = header[i];
    heading.appendChild(headContent);
  }
  theader.appendChild(heading);
}

// function renderFooter(){
//   var tfooter = document.getElementById('foot');
//   var footer = document.createElement('tr');
//   for (var i = 0; i < header.length; i++) {
//     var headContent = document.createElement('td');
//     headContent.textContent = header[i];
//     heading.appendChild(headContent);
//   }
//   theader.appendChild(heading);
// }

renderHeader();

var storeObjects = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

for(var i = 0; i < storeObjects.length; i++) {
  storeObjects[i].renderStoreInfo();
}

//renderFooter();