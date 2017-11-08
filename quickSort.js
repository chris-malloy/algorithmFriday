function quicksort(theArray) {
    if (theArray.length == 1) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = theArray[0];
    for (let i = 1; i < theArray.length; i++) {
        if (theArray[i] < pivot) {
            left.push(theArray[i]);
        } else {
            right.push(theArray[i]);
        }
    }
    // recursively call the SAME function we are in.  
    var newArray = quicksort(left).concat(pivot, quicksort(right));

}