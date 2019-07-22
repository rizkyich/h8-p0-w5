function totalDigitRekursif(angka) {
  // you can only write your code here!
  // init variable contain number converted to string
  var numString = angka.toString();

  // BASE CASES
  if(numString.length === 1) {
    return Number(numString)
  } 
  // Take first index and convert into number every iteration
  // Get remaining string and store into variable
  else {
    var num = Number(numString[0]);
    var remain = numString.substring(1, numString.length)    
  }

  // take num and add by remain number every iteration
  return num + totalDigitRekursif(Number(remain))  
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5