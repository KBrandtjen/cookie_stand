'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//gives access to Form
var cookieForm = document.getElementById('cookieForm');
//gives access to table
var cookieTable = document.getElementById('storeData');
//var reset
var locationStuff = [];

function StoreLocation(locationName, minCust, maxCust, avgCookie) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custEachHourArray = [];
  this.cookiesPerHourArray = [];
  this.totalDailyCookieSales = 0;
  //add this.calcCustEachHour();
  //add this.calcCookiesEachHour();
  locationStuff.push(this);
};


StoreLocation.prototype.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.custEachHourArray.push(singleHourCust);
  }
};

StoreLocation.prototype.calcCookiesEachHour = function () {
  this.totalDailyCookieSales = 0;
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookie);
    this.cookiesPerHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
    console.log(i, this.totalDailyCookieSales, this, 'i, this.totalDailyCookieSales, this');
  }
};


StoreLocation.prototype.render = function () {
  this.calcCookiesEachHour();
  var firstRow = document.createElement('tr');
  var firstStoreName = document.createElement('td');
  firstStoreName.textContent = this.locationName;
  firstRow.appendChild(firstStoreName);

  for (var i = 0; i < hours.length; i++) {
    var firstDataRow = document.createElement('td');
    firstDataRow.textContent = this.cookiesPerHourArray[i];
    firstRow.appendChild(firstDataRow);
  };
  var firstTotalRow = document.createElement('td');
  firstTotalRow.textContent = this.totalDailyCookieSales;
  firstRow.appendChild(firstTotalRow);
  cookieTable.appendChild(firstRow);
};

new StoreLocation('First and Pike', 23, 65, 6.3); //eslint-disable-line
new StoreLocation('Seatac Airport', 3, 24, 1.2); //eslint-disable-line
new StoreLocation('Seattle Center', 11, 38, 3.7); //eslint-disable-line
new StoreLocation('Capitol Hill', 20, 38, 2.3);//eslint-disable-line
new StoreLocation('Alki', 2, 16, 4.6);//eslint-disable-line


function handleCommentSubmit(event) {

  event.preventDefault();
  //console.log('form was clicked');
  if (!event.target.newLocation.value || !event.target.newMinCust.value || !event.target.newMaxCust.value || !event.target.newAvgCookie.value) {
    return alert('Fields cannot be empty!');
  }
//getting info from html and assigning (=) them to the function
  var newLocation = (event.target.newLocation.value);
  var newMinCust = parseInt(event.target.newMinCust.value);
  var newMaxCust = parseInt(event.target.newMaxCust.value);
  var newAvgCookie = parseFloat(event.target.newAvgCookie.value);
  console.log(newLocation, newMinCust, newMaxCust, newAvgCookie);
// new object being created with the constructor
  new StoreLocation(newLocation, newMinCust, newMaxCust, newAvgCookie);
  // First, access the table on the DOM.
  var cookieTable = document.getElementById('storeData');
    // Add content to the table. textContent is adding content to the cookie table in html but by putting html it makes that null. If we didn't have it then it would create a new table each time. null makes this new table not exist. The next 3 lines remake the header render all store and footer with the new data.
  cookieTable.textContent = null;
    // Run makeHeaderRow function.
  makeHeaderRow();
    // Run renderAllStore function to render all stores.
  renderAllStore();
    // Run makeFooterRow function.
  makeFooterRow();
  // locationStuff.push(newSubmission);

}


function makeHeaderRow() {
  //var cookieTable = document.getElementById('storeData');
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

function renderAllStore() {
  for (var i = 0; i < locationStuff.length; i++) {
    locationStuff[i].render();
  }
};

function makeFooterRow() {
  //var cookieTable = document.getElementById('storeData');
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
  grandTotalCell.textContent = 'Grand Total';
  footerRow.appendChild(grandTotalCell);
  cookieTable.appendChild(footerRow);
}

cookieForm.addEventListener('submit', handleCommentSubmit);

makeHeaderRow();
renderAllStore();
makeFooterRow();
