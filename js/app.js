'use strict';

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgSales: 6.3,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales
};

var seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSales: 1.2,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales
};

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgSales: 3.7,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales
};

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgSales: 2.3,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgSales: 4.6,
  customersPerHour: randomCustomer,
  soldCookies: cookieSales
};

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
  return cookies;
}