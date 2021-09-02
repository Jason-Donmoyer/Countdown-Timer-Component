// VARIABLES

let countdownDateHeading = document.getElementById("countdown-date-heading");

const today = new Date();

const dayOfMonth = today.getDate();
let year = today.getFullYear();

// Get new month for text purposes
let newMonth;
if (today.getMonth() + 4 > 11) {
  newMonth = (today.getMonth() + 4) - 12;
  year++;
}

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

const month = getNewMonth(newMonth);

const fullDay = dayOfMonth + ' ' + month + ' ' + year;
console.log(fullDay);

countdownDateHeading.innerHTML = fullDay;