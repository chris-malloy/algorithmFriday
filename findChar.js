// find the first non-repeating char in a string

function findChar(str){
    var strArray = str.split("");
    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] != strArray[i+1]){
            i++;
            return strArray[i];
        } 
    }
}

console.log(findChar('eel'));
console.log(findChar('oozing'));