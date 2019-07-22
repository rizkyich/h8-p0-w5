function makanTerusRekursif(waktu) {
  // you can only write your code here!
  var count = 0;
  var remaining = 0;

  if (waktu === 0) {
    return 0;
  } else if (waktu > 0 && waktu < 15) {
    return 1;
  } else {

    count++;
    remaining = waktu -15;
  }

  return count + makanTerusRekursif(remaining);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0