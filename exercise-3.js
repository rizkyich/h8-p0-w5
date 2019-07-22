function makanTerusRekursif(waktu) {
  // you can only write your code here!
  // init variable count to return and ramining to be parameters for iteration
  var count = 0;
  var remaining = 0;

  // BASE CASES
  if (waktu === 0) {
    return 0;
  } else if (waktu > 0 && waktu < 15) {
    return 1;
  } 
  // for every iteraion count added by 1 and waktu minus by 15
  else {
    count++;
    remaining = waktu -15;
  }

  // return count and call function with remaining
  return count + makanTerusRekursif(remaining);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0