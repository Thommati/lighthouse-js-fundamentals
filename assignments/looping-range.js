const range = function(start, end, step) {
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return [];
  }
  const result = [start];
  while(result[result.length - 1] + step <= end) {
    result.push(result[result.length - 1] + step);
  }
  return result;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 8, 2));
console.log(range(2, 4));