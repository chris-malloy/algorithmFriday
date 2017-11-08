// The moon goes through phases because it orbits the earth and the sun hits it differently at different places in its orbit.This means that, depending on where it is in its orbit, you might see a full moon, right quarter moon, or even "no"
// moon(new moon) at all.It takes 27.3 days
// for the moon to orbit the Earth, but the actual phase difference from one full moon to the next is 29.5 days because the earth cruises a cool 45 million miles around the sun in that 27.3 days.It takes 2.2 days
// for the the moon to make up
// for that distance and get all the way back to where you last saw a full moon.

// Whenever the moon is full twice in one month, the second one is called a "blue moon."
// This last happened in July of 2015 on the 1 st and 31 st.The next time is January of 2018(same days).You can research the timing, otherwise you can assume midnight.Write a program that determines how many "blue moons"
// there will be in third millenia(2000 - 2999) ?

//     If you want to be really, really specific, the lunar month varies depending on the shape of the sun and moons orbit.The average is 29 days, 12 hours, and 44 minutes.


// create a an arry of full moon dates.
// check to see if the date has a month name twice

// arrayFullMoonDates = []

// // what day is 29.5 days from now?
// // give me that date - that is full moon date - push it to array 
// // or in otherwords
// // seed = day + 29.5
// // arrayFullMoonDates.push(seed)
// // var d = new Date();

// console.log(date.js)
// var dateObjet = new Date(year, month, day, hour)
// var givenFullMoonDate = new Date(2015, 6, 1);
// for (var year = 2015; year <= 2999; year++) {
//     for (var month = 6; month <= 11; month++) {
//         for (var day = 0; day <= 29.5; day += 29.5) {
//             var dateObject = new Date(year, month, hour)
//             fullMoonDate = dateObject.getDay();
//             // if (day = 29.5) {
//             arrayFullMoonDates.push(fullMoonDate)
//                 // }
//         }
//     }
// }
// console.log(arrayFullMoonDates)
// var arrayFullMoonDates = [];

// var seed = new Date(2015, 6, 1, 12);

// for (var year = 2015; year <= 2999; year++) {
//     var d1 = Date.today()
//         .set({
//             year: 2015,
//             month: 6,
//             day: 1,
//             hour: 12,
//             minute: 0
//         })
//         .add({
//             days: 29.5,
//             minutes: 44
//                 // hour: 12
//         })
//     arrayFullMoonDates.push(d1);
//     for (var i = 0; i < arrayFullMoonDates.length; i++) {
//         console.log("looking sdfnsd");
//         if (arrayFullMoonDates[i].year == 2018) {
//             console.log(i);
//         }
//     }
// }
// console.log(arrayFullMoonDates.length);








var firstFullMoonOf2000 = new Date("Friday, 21 January 2000, 00:40:42");
var firstFullMoonOf2000InSeconds = firstFullMoonOf2000.getTime() / 1000;
// console.log(firstFullMoonOf2000)
var sAsM = 60;
var sAsH = sAsM * 60;
var sAsD = sAsH * 24;
var secondsInALunarMonth = (sAsD * 29) + (sAsH * 12) + (sAsM * 44);
var x = (948433224 + 2551440);
console.log(new Date(x));

var totalSecondsIn1000Yrs = sAsD * 365.25 * 1000;
numberOfLunarCyclesIn1000Yrs = totalSecondsIn1000Yrs / secondsInALunarMonth;

var fullMoons = [firstFullMoonOf2000];