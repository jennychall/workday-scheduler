//added moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

//Hours
var nineAm = $("#9am");
var tenAm = $("10am");
var elevenAm = $("11am");
var twelveAM = $("12pm");
var onePm = $("13pm");
var twoPm = $("14pm");
var threePm = $("15pm");
var fourPm = $("16pm");
var fivePm = $("17pm");
var sixPm = $("18pm");
var sevenPm = $("19pm");

var hour = moment().hours();
var userInput;
var hourSpan; 
//variable hourString = $(".hour").text().split(" ");

//date and hour

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100);
  
  function initPage() {





    
  }
