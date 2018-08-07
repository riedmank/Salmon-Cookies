'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ',
  '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

function randomCustomer() {
  this.minCustomers = Math.ceil(this.minCustomers);
  this.maxCustomers = Math.floor(this.maxCustomers);
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
}

function cookieSales() {
  var cookies = [];
  for(var i = 0; i < 15; i++) {
    cookies[i] = Math.round(this.customersPerHour() * this.avgSales);
  }
  var sum = cookies[0];
  for(i = 0; i < cookies.length; i++) {
    sum = sum + cookies[i];
  }
  cookies.push(sum);
  for(i = 0; i < cookies.length; i++) {
    cookies[i] = `${hours[i]} ${cookies[i]} cookies.`;
  }
  return cookies;
}

function addCookieInfo() {
  var ul = document.getElementById(this.name);
  for(var j = 0; j < 16; j++) {
    var storeInfo = document.createElement('li');
    storeInfo.textContent = this.soldCookies()[j];
    ul.appendChild(storeInfo);
  }
}

var firstAndPike = {
  name: 'firstAndPike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSales: 6.3,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales,
  addInfo: addCookieInfo
};

var seaTacAirport = {
  name: 'seaTacAirport',
  minCustomers: 3,
  maxCustomers: 24,
  avgSales: 1.2,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales,
  addInfo: addCookieInfo
};

var seattleCenter = {
  name: 'seattleCenter',
  minCustomers: 11,
  maxCustomers: 38,
  avgSales: 3.7,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales,
  addInfo: addCookieInfo
};

var capitolHill = {
  name: 'capitolHill',
  minCustomers: 20,
  maxCustomers: 38,
  avgSales: 2.3,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales,
  addInfo: addCookieInfo
};

var alki = {
  name: 'alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgSales: 4.6,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales,
  addInfo: addCookieInfo
};

var storeObjects = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

for(var i = 0; i < storeObjects.length; i++) {
  storeObjects[i].addInfo();
}