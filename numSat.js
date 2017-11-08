// January 1, 1701 was a Saturday.How many Saturdays were on the first of the month between 1701 and 1800 ?

// build a list of first day of each month
// then check if saturday then return day

// for year 1701 - 1800 
// for month 1 - 12
// get the first day of each month
// is saturday? great Push 
// otherwise keep going 


// var dayOfWeek = date.getDate();
// var month = date.getMonth();
// var year = date.getFullYear();

// dayOfWeek = dateObject.getDay(2017, 9, 29);
// console.log(dayOfWeek);

// for year outer loop {
//     ask
//     for day(givenMonth, day(first), year)
//     if saturday push
// }

// dayOfWeek = dateObject.getDay(loopthroughyear, loopthroughmonth, 1);
// find day 6 out of this ^

// var dateObject = new Date(year, month, 1);
var firstSaturdays = [];

for (var year = 1701; year <= 1800; year++) {
    for (var month = 0; month <= 11; month++) {
        // dateObject.setYear(year);
        // dateObject.setMonth(month);
        // dateObject.setDate(1);
        var dateObject = new Date(year, month, 1)

        var dayOfWeek = dateObject.getDay();
        // console.log(year, month, dayOfWeek)
        if (dayOfWeek == 6) {
            // console.log("found saturday");
            // firstSaturdays.push(dayOfWeek);
            firstSaturdays.push(dateObject.toJSON());
        }
    }
}
console.log(firstSaturdays.length)
    // 171 is the answer