function changeVocals(str) {
  //code di sini
  // init library to store next letter and vowels contain every vowels
  var library = 'ABEFIJOPUVabefijopuv';
  var vowels = ['A', 'I', 'U', 'E', 'O', 'a', 'i', 'u', 'e', 'o'];

  // split string into array
  var strArr = str.split('');
  // console.log(strArr)

  //loop through string to find vowels
  for (var i = 0; i < strArr.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (strArr[i] === vowels[j]) {
        var nextLetter = library.indexOf(strArr[i]) + 1;
        strArr[i] = library[nextLetter];
      }
    }
  }

  // return join strArr
  return strArr.join('');
}

function reverseWord(str) {
  //code di sini
  // init variable to store reversed string
  var revString = '';

  //loop through string from the highest index to 0 
  for (var i = str.length - 1; i >= 0; i--) {
    
    // store the string highest index to revString
    revString += str[i];
  }

  return revString;
}

function setLowerUpperCase(str) {
  //code di sini
  // init varirable to store result 
  var strLowerUpper = '';

  // loop through string and fing lowercase and uppercase letter
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      strLowerUpper += str[i].toLowerCase();
    } else {
      strLowerUpper += str[i].toUpperCase();
    }
  }

  return strLowerUpper;
}

function removeSpaces(str) {
  //code di sini
  // init variable to store result
  var noSpaces = '';

  // loop through string and find space ' '
  for (var i = 0; i < str.length; i++) {
    
    // when string index is not space store it in noSpaces
    if (str[i] !== ' ') {
      noSpaces += str[i];
    }
  }

  return noSpaces;
}

function passwordGenerator(name) {
  //code di sini
  // callback all functions
  var vowelsChanged = changeVocals(name);
  var reversedWord = reverseWord(vowelsChanged);
  var changeUpperLower = setLowerUpperCase(reversedWord);
  var deleteSpaces = removeSpaces(changeUpperLower)

  // handler for string length less than 5
  if (deleteSpaces.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  return deleteSpaces;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'