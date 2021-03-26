const smartGarbage = function(trash, bins) {
  bins[trash] += 1;
  return bins;
};

const myBin = { waste: 4, recycling: 2, compost: 5 };
smartGarbage('recycling', myBin);
console.log(myBin);
