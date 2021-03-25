// The easy way
const concat = function(arr1, arr2) {
  return [...arr1, ...arr2];
};

/*
// with for..of loops
// const concat = function(arr1, arr2) {
//   const result = [];
//   for (item of arr1) {
//     result.push(item);
//   }
//   for (item of arr2) {
//     result.push(item);
//   }
//   return result;
// };
*/

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
