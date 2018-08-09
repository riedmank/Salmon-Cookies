'use strict';

// Table header info
var header = ['Store Name', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
  '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', 'Total'];

// Array of objects
var storeObjects = [];

// Store constructor
function Store(name, minCustomers, maxCustomers, avgSales) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.hourlySales = [];
  storeObjects.push(this);
}

// Creating objects
var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// Adding prototypes
Store.prototype.randomSales = randomSales;
Store.prototype.cookieSales = cookieSales;
Store.prototype.renderStoreInfo = renderStoreInfo;
Store.prototype.renderCookieTosser = renderCookieTosser;

// Calculate random customers and cookie sales
function randomSales() {
  this.minCustomers = Math.ceil(this.minCustomers);
  this.maxCustomers = Math.floor(this.maxCustomers);
  return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgSales;
}

// Add store name, cookie sales, and totals to array
function cookieSales() {
  for(var i = 0; i <= 15; i++) {
    this.hourlySales[i] = Math.round(this.randomSales());
  }
  this.hourlySales.push(this.hourlySales.reduce((total, element) => total + element, 0));
  this.hourlySales.splice(0, 1, this.name);
  return this.hourlySales;
}

// Add info to header
function renderHeader(string) {
  var theader = document.getElementById(string);
  var heading = document.createElement('tr');
  for (var i = 0; i < header.length; i++) {
    var headContent = document.createElement('td');
    headContent.textContent = header[i];
    heading.appendChild(headContent);
  }
  theader.appendChild(heading);
}

// Add info to page
function renderStoreInfo(string) {
  var tbody = document.getElementById(string);
  var storeInfo = document.createElement('tr');
  for(var j = 0; j < this.hourlySales.length; j++) {
    var storeSales = document.createElement('td');
    storeSales.textContent = this.hourlySales[j];
    storeInfo.appendChild(storeSales);
  }
  tbody.appendChild(storeInfo);
}

// Add info to second table
function renderCookieTosser(string) {
  var tbody = document.getElementById(string);
  var storeInfo = document.createElement('tr');
  for(var j = 0; j < this.hourlySales.length; j++) {
    var storeSales = document.createElement('td');
    if (j === 0) {
      storeSales.textContent = this.hourlySales[j];
    } else if ((this.hourlySales[j]) / 20 < 2) {
      storeSales.textContent = 2;
    } else {
      storeSales.textContent = Math.round(this.hourlySales[j] / 20);
    }
    storeInfo.appendChild(storeSales);
  }
  tbody.appendChild(storeInfo);
}

// Add info to footer
function renderFooter(){
  var tfooter = document.getElementById('foot');
  var footer = document.createElement('tr');
  footer.setAttribute('id', 'dailyTotals');
  for (var i = 0; i < header.length; i++) {
    var footContent = document.createElement('td');
    if (i === 0) {
      footContent.textContent = 'Daily Totals';
    } else {
      var content = 0;
      for (var j = 0; j < storeObjects.length; j++) {
        content += parseInt(storeObjects[j].hourlySales[i]);
      }
      footContent.textContent = content;
    }
    footer.appendChild(footContent);
  }
  tfooter.appendChild(footer);
}

// User input from forms added to page
var formElt = document.getElementById('storeForm');
formElt.addEventListener('submit', function(e) {
  e.preventDefault();
  if (parseInt(e.target.minCustomers.value) > parseInt(e.target.maxCustomers.value)) {
    return alert('Minimum customers needs to be lower than maximum customers.');
  }
  var userStore = new Store(e.target.name.value, e.target.minCustomers.value, e.target.maxCustomers.value, e.target.avgSales.value);
  this.hourlySales = userStore.cookieSales();
  storeObjects.push(userStore);
  storeObjects[storeObjects.length - 1].renderStoreInfo('body');
  var tfooter = document.getElementById('foot');
  var foot = document.getElementById('dailyTotals');
  tfooter.removeChild(foot);
  renderFooter();
  storeObjects[storeObjects.length - 1].renderCookieTosser('body1');
  formElt.reset();
});

// Function calls
for(var i = 0; i < storeObjects.length; i++) {
  storeObjects[i].cookieSales();
}
renderHeader('head');
for(i = 0; i < storeObjects.length; i++) {
  storeObjects[i].renderStoreInfo('body');
}
renderFooter();
renderHeader('head1');
for(i = 0; i < storeObjects.length; i++) {
  storeObjects[i].renderCookieTosser('body1');
}
