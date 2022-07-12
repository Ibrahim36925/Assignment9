// / Chapter 31-34 : DATE METHODS
// Q1

//     var date = new Date();
//     document.write(date)
    
// // Q2
// var arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var d = new Date();
// var mname = arr[d.getMonth()];
// alert("Current month: " + mname)
   

// // Q3
//   var wdays = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
//   var d = new Date();
//    var wname = wdays[d.getDay()];
//    alert("Today is " + wname);
    
//Q4
// var currentDay = new Date("10,july,2022"||"9,july,2022").getDay();
//     var day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

//     if (day[currentDay] === "Sat" || day[currentDay] === "Sun") {

//         document.write("Its Fun day")
//     }
//     else {
//         document.write("Its NOT fun day")
//     }


//Q5
// var currentDate = new Date().getDay();

//     if (currentDate === 15 || currentDate < 16) {
//         alert('First fifteen Days of the month')
//     } else {
//         alert('Last Fifteen Days of the month')
//     }

//Q6
// var currentDate = new Date();

//     document.write("Current Date : " + currentDate);
//     document.write("<br>")

//     var MidNightJan = new Date("jan 1, 1970").getTime();


//     var diff = currentDate - MidNightJan;
//     document.write("Elapsed Millisecond since January 1, 1970: " + diff);
//     document.write("<br>")

//     var Minutes = diff / (1000 * 60 * 60);

//     document.write("Elapsed Minutes since January 1, 1970: " + Minutes);

// Q7
// var date = new Date().getHours();
//     if (date >= 12) {
//         alert("It's AM")
//     }
//     else {
//         alert("It's PM")
//     }

//Q8
// var date = new Date("Dec 31, 2020");
//     document.write("Later Date" + date);

//Q9
// var date = new Date("June 18, 2015");
//    var current = new Date();
//    var diff = current - date;

//    var RamzanDaysPassed = Math.round(diff / (1000 * 60 * 60 * 24))
//    alert(RamzanDaysPassed + " days have Passed since 1st Ramzan, 2015")

//Q10
// var date = new Date("Jan 01, 2015");
//    var current = new Date();
//    var diff = current - date;

//    var secPassed = Math.round(diff / (1000 * 60))
// document.write("On Refernce date " + date + ",<br>" + secPassed + " seconds had Passed since begning of 2015");

// Q11
// var dateTime = new Date("Jan 01, 2015 23:08:16")
//     document.write("Current date:" + dateTime)


//     var beforeHr = new Date("Jan 01, 2015 22:08:16").getTime();

//     dateTime.setTime(beforeHr)
//     document.write("<br>1 hour ago, it was " + dateTime)
// Q12
// var currentDate = new Date();
//     alert("current date:" + currentDate)

//     var yearsBack = new Date("1992 Dec 05").getTime();

//     currentDate.setTime(yearsBack);

//     alert("100 years back it was" + currentDate);

// Q13
// var user = prompt("Enter your year");

//     var userYear = new Date(user).getTime();

//     var currentYear = new Date().getTime();

//     var diff = currentYear - userYear;
//     var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

//     document.write("Your age is : " + age + "<br>");
//     document.write("Your birth year is : " + user)

// Q14
// var Month = ["Jan", "Feb", "Marach", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]

//     var customerName = prompt("Enter your Name : ");
//     var currentMonth = new Date().getMonth();
//     var numberOfUnit = +prompt("Enter number of Units :");
//     var ChargesOfUnit = +prompt("Enter Charges per unit :");
//     var LatePaymentSurcharge = +prompt("Enter Late Payment Surcharge :");
//     var netAmount = +prompt("Enter Net Amount Payable (within Due Date)");

//     var net_Amount_Payable = numberOfUnit * ChargesOfUnit;
//     var Gross_Amount_Payable = netAmount + LatePaymentSurcharge;




//     document.write(`<h1>K-Electric Bill <br> </h1>`)
//     document.write(`<p>Customer Name: <b>${customerName}</b> <br> </p>`)
//     document.write(`<p>Month: <b>${Month[currentMonth]}</b> <br></p>`)
//     document.write(`<p> Number of Units: <b>${numberOfUnit} </b><br></p>`)
//     document.write(`<p>Charges per unit: <b>${ChargesOfUnit}</b> <br> </p>`)

//     document.write(`<p>Net Amount Payable (within Due Date): <b>${net_Amount_Payable}</b> <br> </p>`)
//     document.write(`<p>Late Payment Surcharge: <b>${LatePaymentSurcharge}</b> <br> </h4>`)
//     document.write(`<p>Gross Amount Payable (after Due Date): <b>${Gross_Amount_Payable}</b> <br> </p>`)
