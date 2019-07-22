function kaliTerusRekursif(angka) {
  // you can only write your code here!
  // convert angka to string and store in variable
  var numString = angka.toString();

  // BASE CASES
  if (numString.length === 1) { 
    return Number(numString);
  }
  
  else {
    // Take first index for every iteration
    var multiple = Number(numString[0]);
    // console.log('awal: ' + multiple)

    // Get remaining numbers and multiples it
    for (var i = 1; i < numString.length; i++) {
      multiple = multiple * Number(numString[i])
      // console.log('hasil perkalian: '+ multiple)
    }    
  }

  // Call the function with result of the multiple
  return kaliTerusRekursif(multiple);  
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6