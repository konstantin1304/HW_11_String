//First part
function getEngAlphabetUpperCase(){
    let alphabetString = "";
    for (let i = 65; i <= 90; i++){
        alphabetString +=String.fromCharCode(i);
    }
    return alphabetString;
}

function getEngAlphabetLowCaseReverse(){
    let alphabetString = "";
    for (let i = 122; i >= 97; i--){
        alphabetString +=String.fromCharCode(i);
    }
    return alphabetString;
}

function getRusAlphabetUpperCase(){
    let alphabetString = "";
    for (let i = 1072; i <= 1103; i++){
        alphabetString +=String.fromCharCode(i);
    }
    return alphabetString;
}

function getASCIINmbers(){
    let nubersString = "";
    for (let i = 48; i <= 57; i++){
        nubersString +=String.fromCharCode(i);
    }
    return nubersString;
}

function getASCIIPrintsSimbals(){
    let alphabetString = "";
    for (let i = 32; i <= 126; i++){
        alphabetString +=String.fromCharCode(i);
    }
    return alphabetString;
}

//Second part
function parseIntNumberToString(digit){
    let stringDigit = ''+parseInt(digit);
    return stringDigit;
}

function parseFloatNumberToString(digit){
    let stringDigit = ''+parseFloat(digit);
    return stringDigit;
}

function parseStringToIntNumber(strDigit){
    let digit = parseInt(+strDigit);
    return digit;
}

function parseStringToFloatNumber(strDigit){
    let digit = parseFloat(+strDigit);
    return digit;
}

//Third part
function getWordsArray(str) {
    /*const punctuationMarks = ",.?!;:";
   for (let i = 0; i < str.length; i++){
       for (let j = 0; j < punctuationMarks.length; j++){
           if (str[i] === punctuationMarks[j] && str[i+1] !== " " && (i+1) !== str.length){
               str = str.slice(0,i) +' '+str.slice(i+1);
           }
       }
   }*/
    str = str.replace(/[,.?!;:]/g,' ');
    str = str.replace(/\s+/g, ' ').trim();
    str = str.split(' ');
    return str;
}

function checkLengthOfLessElement(str){
    str = getWordsArray(str);
    let minWord = str[0];
    for (let i = 1; i<str.length; i++){
        if (str[i].length < minWord.length){
            minWord = str[i];
        }
    }
    return minWord.length;
}

function replaceLastThreeSymbols(arr, wordLength) {
    for (let i = 0; i < arr.length;i++){
        if (arr[i].length === wordLength && arr[i].length >= 3){
            arr[i] = arr[i].slice(0,-3);
            arr[i] += "$";
        }
    }
    return arr;
}

function enterSpaces(str){
    const punctuationMarks = ",.?!;:";
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < punctuationMarks.length; j++){
            if (str[i] === punctuationMarks[j] && str[i+1] !== " " && (i+1) !== str.length){
                let firstPart = str.substring(0,i+1);
                let secondPart = str.substring(str.length - (str.length-i-1));
                str =  firstPart+ ' ' + secondPart;
            }
        }
    }
    return str;
}

function removeRepeatedSymbols(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length; j++){
            if(str[i] === str[j]){
                str = str.slice(0,j) + str.slice(j+1);
            }
        }
    }
    return str;
}

function getWordsQuantity(str){
    if (str === ''){
        return 0;
    }
    str = getWordsArray(str);

    return str.length;
}

function remove(str, startPosition, lastPosition) {
    const fistPart = str.slice(0, startPosition);
    const secondPart = str.slice(startPosition + lastPosition);
    return fistPart + secondPart;
}

function reverse(str) {
    let strReverse = '';
    for (let i = str.length - 1; i >=0; i--){
        strReverse+=str[i];
    }
    return strReverse;
}

function deleteLastWord(str){
    let oldStr = str;
    str = getWordsArray(str);
    str = str.pop();
    return remove(oldStr, oldStr.lastIndexOf(str),str.length);
}

var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
console.log(user[0]);
user = JSON.parse(user);
console.log(user.name);


numbers = JSON.parse(numbers);
console.log(typeof(numbers));
console.log(numbers[0]);