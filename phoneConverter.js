// take str and return 555-555-5555
function convertPhone(phoneStr) {
    // var case1 = new RegExp('/d/d/d-/d/d/d-/d/d/d/d')
    var onlyDigits = phoneStr.replace(/[^\d]/g, '')
    if (onlyDigits.length < 10) {
        console.log("Too short")
    } else if (onlyDigits.length > 11) {
        console.log("Too Long")
    } else {
        return onlyDigits
    }
}

// possible inputs
var numbers = [
    '555-555-5555',
    '(555)555-5555',
    '555 555 5555',
    '555 555-5555',
    '1-555-555-5555',
    '(1)555-555-5555',
    '5555555555',
    '555-five-55-aebdgtxi;;3tt4greqr6seven',
    '5-trumprules-555-5-5-5-5-5-5',
    '2798504trumpforprez23587928579428795458792',
    '1-800-ninjas-are-cool',
    '1900-acdc4life',
]
numbers.map((number) => {
    // console.log(convertPhone(number));
})

function convertPhone1(str) {
    // with Rob
    // Goal is to format the number like so: 555-555-5555
    // 1. Get rid of all non-number!
    var onlyNumbers = str.replace(/[^\d]/g, "");
    return onlyNumbers;
    // 2. We now have a string of just numbers now...
    //      Check to see if the str is AT LEAST 10 digits long
    if (onlyNumbers.length < 10) {
        // 3 if not long enough return, otherwise...
        return "Number is too short. Please re-enter"
    }
    // remove extra digits
    if ((onlyNumbers.length > 10) && (onlyNumber.match(/^1/) !== null)) {
        // 3b. Check to see it the first digit is a 1
        onlyNumbers = onlyNumbers.replace(/^1/, "");
    }
    var numberAsArray = onlyNumbers.split("");
    var rightLength = numberAsArray.slice(0, 10);
    var formatedPhone = rightLength.splice(3, 0, '-');
    formatedPhone = formatedPhone.splice(7, 0, '-');
    var finalFormattedPhone = formatedPhone.join("");
    return finalFormattedPhone;
}
numbers.map((number) => {
        console.log(convertPhone1(number));
    })
    // 4. Take the 10 numbers we have, and put it in the right format



// Eddie's Version    
function convertPhone(phoneStr) {
    var regExp = /[\d]/g
    var numsFromPhone = phoneStr.match(regExp);
    if (numsFromPhone[0] == '1') {
        numsFromPhone.shift();
    }
    if (numsFromPhone.length < 10) {
        var lettersAreNowNumbers = lettersToNums(phoneStr).match(regExp);
        if (lettersAreNowNumbers[0] == '1') {
            lettersAreNowNumbers.shift();
        }
        if (lettersAreNowNumbers.length < 10) {
            return ("Not enough numbers!");
        } else {
            return finalProduct(lettersAreNowNumbers);
        }
    } else {
        return finalProduct(numsFromPhone);
    }
}

function lettersToNums(strAgain) {
    var abc = strAgain.replace(/[abc]/gi, "2");
    var def = abc.replace(/[def]/gi, "3");
    var ghi = def.replace(/[ghi]/gi, "4");
    var jkl = ghi.replace(/[jkl]/gi, "5");
    var mno = jkl.replace(/[mno]/gi, "6");
    var pqrs = mno.replace(/[pqrs]/gi, "7");
    var tuv = pqrs.replace(/[tuv]/gi, "8");
    var wxyz = tuv.replace(/[wxyz]/gi, "9");
    return (wxyz);
}

function finalProduct(array) {
    var str = "";
    for (let i = 0; i < 10; i++) {
        if (i != 3 && i != 6) {
            str += array[i]
        } else {
            str += "-" + array[i]
        }
    }
    return str;
}