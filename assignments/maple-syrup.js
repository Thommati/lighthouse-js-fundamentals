const howManyHundreds = function(numSyrup) {
  if (numSyrup <= 0) {
    return 0;
  }
  return Math.floor(numSyrup / 100);
};

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
