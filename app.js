"use strict"

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
// Properties
  locationName: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custEachHourArray: [],
  cookiesPerHourArray: [],
  totalDailyCookieSales: 0
};

firstAndPike.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
  var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
this.custEachHourArray.push(singleHourCust);
  }
};

firstAndPike.calcCookiesEachHour = function () {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookie);
    this.cookiesPerHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};

firstAndPike.calcCookiesEachHour();

firstAndPike.render = function() {
  var pikeList = document.getElementById('pike');
  for (var i = 0; i < hours.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + ': ' + this.cookiesPerHourArray[i] + 'cookies';
    pikeList.appendChild(listElement);
  }
// document.body.appendChild(pikeList);
  var pikeTotal = document.createElement('li');
  pikeTotal.textContent = 'Total: ' + this.totalDailyCookieSales;
  pikeList.appendChild(pikeTotal);
};

firstAndPike.render();




var seatac = {
  location: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  custEachHourArray: [],
  cookiesPerHourArray: [],
  totalDailyCookieSales: 0
};

seatac.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
  var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
this.custEachHourArray.push(singleHourCust);
  }
};

seatac.calcCookiesEachHour = function () {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookie);
    this.cookiesPerHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};


var seattleCenter = {
// Properties
  location: 'Seattle Center',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custEachHourArray: [],
  cookiesPerHourArray: [],
  totalDailyCookieSales: 0
};

seattleCenter.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
  var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
this.custEachHourArray.push(singleHourCust);
  }
};

seattleCenter.calcCookiesEachHour = function () {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookie);
    this.cookiesPerHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};


var capitolHill = {
// Properties
  location: 'Capitol Hill',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custEachHourArray: [],
  cookiesPerHourArray: [],
  totalDailyCookieSales: 0
};

capitolHill.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
  var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
this.custEachHourArray.push(singleHourCust);
  }
};

capitolHill.calcCookiesEachHour = function () {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookie);
    this.cookiesPerHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};


var alki = {
// Properties
  location: 'Alki',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custEachHourArray: [],
  cookiesPerHourArray: [],
  totalDailyCookieSales: 0
};

alki.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
  var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
this.custEachHourArray.push(singleHourCust);
  }
};

alki.calcCookiesEachHour = function () {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookie);
    this.cookiesPerHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};
