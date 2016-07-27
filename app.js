'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var locationStuff = [];

function StoreLocation(locationName, minCust, maxCust, avgCookie) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custEachHourArray = [];
  this.cookiesPerHourArray = [];
  this.totalDailyCookieSales = 0;

  this.calcCustEachHour = function () {
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.custEachHourArray.push(singleHourCust);
    }
  };
  this.calcCookiesEachHour = function () {
    this.calcCustEachHour();
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookie);
      this.cookiesPerHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
  };
  this.calcCookiesEachHour();
  locationStuff.push(this);


  this.render = function () {
    var cookieTable = document.getElementById('storeData');
    var firstRow = document.createElement('tr');
    var firstStoreName = document.createElement('td');
    firstStoreName.textContent = this.locationName;
    firstRow.appendChild(firstStoreName);

    for (var i = 0; i < hours.length; i++) {
      var firstDataRow = document.createElement('td');
      firstDataRow.textContent = this.cookiesPerHourArray[i];
      firstRow.appendChild(firstDataRow);
    }
    var firstTotalRow = document.createElement('td');
    firstTotalRow.textContent = this.totalDailyCookieSales;
    firstRow.appendChild(firstTotalRow);
    cookieTable.appendChild(firstRow);
  };
};

var firstAndPike = new StoreLocation('First and Pike', 23, 65, 6.3); firstAndPike.render();//eslint-disable-line
var seatac = new StoreLocation('Seatac Airport', 3, 24, 1.2); seatac.render();//eslint-disable-line
var seattleCenter = new StoreLocation('Seattle Center', 11, 38, 3.7); seattleCenter.render();//eslint-disable-line
var capitolHill = new StoreLocation('Capitol Hill', 20, 38, 2.3); capitolHill.render();//eslint-disable-line
var alki = new StoreLocation('Alki', 2, 16, 4.6);//eslint-disable-line
alki.render();

function makeHeaderRow() {
  var cookieTable = document.getElementById('storeData');
  var headerRow = document.createElement('tr');
  var emptyElement = document.createElement('th');
  emptyElement.textContent = '';
  headerRow.appendChild(emptyElement);

  for (var i = 0; i < hours.length; i++) {
    var hoursRow = document.createElement('th');
    hoursRow.textContent = hours[i];
    headerRow.appendChild(hoursRow);
  };
  var totalCell = document.createElement('th');
  totalCell.textContent = ('Total');
  headerRow.appendChild(totalCell);
  cookieTable.appendChild(headerRow);
}
makeHeaderRow();

function makeFooterRow() {
  var cookieTable = document.getElementById('storeData');
  var footerRow = document.createElement('tr');
  var totalCookiePerHour = document.createElement('td');
  totalCookiePerHour.textContent = 'Total Per Store';
  footerRow.appendChild(totalCookiePerHour);

  for (var i = 0; i < hours.length; i++) {
    var totalsRow = document.createElement('th');
    totalsRow.textContent = 'N/A';
    footerRow.appendChild(totalsRow);
  };
  var grandTotalCell = document.createElement('th');
  grandTotalCell.textContent = "Grand Total";
  footerRow.appendChild(grandTotalCell);
  cookieTable.appendChild(footerRow);

}
makeFooterRow();
