var testArray = ['cat', 'dog', 'bird']

function find(array, element) {
    var s = array.indexOf(element)
    if (s === -1){
        console.log("Not Found");
    } else {
        console.log(s);
    }

}

find(testArray,'thing');