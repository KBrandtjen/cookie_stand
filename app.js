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
    listElement.textContent = hours[i] + ':' + this.cookiesPerHourArray[i] + 'cookies';
    pikeList.appendChild(listElement);
  }
  document.body.appendChild(pikeList);
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

seatac.calcCookiesEachHour();

seatac.render = function() {
  var seatacList = document.getElementById('seatac');
  for (var i = 0; i < hours.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + ':' + this.cookiesPerHourArray[i] + 'cookies';
    seatacList.appendChild(listElement);
  }
  document.body.appendChild(seatacList);
  var seatacTotal = document.createElement('li');
  seatacTotal.textContent = 'Total: ' + this.totalDailyCookieSales;
  seatacList.appendChild(seatacTotal);
};

seatac.render();


var seattleCenter = {
// Properties
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
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

seattleCenter.calcCookiesEachHour();

seattleCenter.render = function() {
  var seattleCenterList = document.getElementById('seattleCenter');
  for (var i = 0; i < hours.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + ':' + this.cookiesPerHourArray[i] + 'cookies';
    seattleCenterList.appendChild(listElement);
  }
  document.body.appendChild(seattleCenterList);
  var seattleCenterTotal = document.createElement('li');
  seattleCenterTotal.textContent = 'Total: ' + this.totalDailyCookieSales;
  seattleCenterList.appendChild(seattleCenterTotal);
};

seattleCenter.render();

var capitolHill = {
// Properties
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
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

capitolHill.calcCookiesEachHour();

capitolHill.render = function() {
  var capitolHillList = document.getElementById('capitolHill');
  for (var i = 0; i < hours.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + ':' + this.cookiesPerHourArray[i] + 'cookies';
    capitolHillList.appendChild(listElement);
  }
  document.body.appendChild(capitolHillList);
  var capitolHillTotal = document.createElement('li');
  capitolHillTotal.textContent = 'Total: ' + this.totalDailyCookieSales;
  capitolHillList.appendChild(capitolHillTotal);
};

capitolHill.render();

var alki = {
// Properties
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
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

alki.calcCookiesEachHour();

alki.render = function() {
  var alkiList = document.getElementById('alki');
  for (var i = 0; i < hours.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + ':' + this.cookiesPerHourArray[i] + 'cookies';
    alkiList.appendChild(listElement);
  }
  document.body.appendChild(alkiList);
  var alkiTotal = document.createElement('li');
  alkiTotal.textContent = 'Total: ' + this.totalDailyCookieSales;
  alkiList.appendChild(alkiTotal);
};

alki.render();
