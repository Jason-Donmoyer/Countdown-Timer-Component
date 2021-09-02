// VARIABLES

let countdownDateHeading = document.getElementById("countdown-date-heading");
let UIDays = document.getElementById("days");
let UIHours = document.getElementById("hours");
let UIMinutes = document.getElementById("minutes");
let UISeconds = document.getElementById("seconds");

const getStartedBtn = document.getElementById("get-started-btn");

getStartedBtn.addEventListener("click", getStarted);


// Date Functionality
const today = addMonths(new Date(), 4);

const dayOfMonth = today.getDate();
const month = getNewMonth(today.getMonth());
const year = today.getFullYear();

const fullDay = dayOfMonth + ' ' + month + ' ' + year;
console.log(fullDay);


// Dynamic Values for UI

// Heading Text
countdownDateHeading.innerHTML = fullDay;


// Countdown Functionality

// Target Date to Count Down To
const targetDate = today.getTime();

// Set Interval Function to Count Down From today
let timer = setInterval(function() {
  
  // Current date and time
  const now = new Date().getTime();

  // Difference in times
  let dif = targetDate - now;

  // Calculate days, hours, minutes, seconds
  let days = Math.floor(dif / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dif % (1000 * 60)) / 1000);

  UIDays.innerHTML = days;
  UIHours.innerHTML = hours;
  UIMinutes.innerHTML = minutes;
  UISeconds.innerHTML = seconds;

  if (dif < 0) { alert("Hooray!"); }

}, 1000);


// FUNCTIONS

// Function to add months to date
// https://stackoverflow.com/questions/2706125/javascript-function-to-add-x-months-to-a-date
function addMonths(date, months) {
  var d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() != d) {
    date.setDate(0);
  }
  return date;
}

// Function to get text for month 
function getNewMonth(today) {
  let month;
  // Switch Statement for months
  switch (today) {
    case 0: 
      month = 'JAN';
      break;
    case 1: 
      month = 'FEB';
      break;
    case 2: 
      month = 'MAR';
      break;
    case 3: 
      month = 'APR';
      break;
    case 4: 
      month = 'MAY'; 
      break;
    case 5: 
      month = 'JUN';
      break;
    case 6: 
      month = 'JUL';
      break;
    case 7: 
      month = 'AUG'; 
      break;
    case 8: 
      month = 'SEP'; 
      break;
    case 9: 
      month = 'OCT'; 
      break;
    case 10: 
      month = 'NOV';
      break;
    case 11: 
      month = 'DEC';
      break;
  }
  return month;
}

// Function for Get Started Button
function getStarted() {
  alert('Sorry, something went wrong!');
}