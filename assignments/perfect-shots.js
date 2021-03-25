const finalPosition = function(moves) {
  return moves.reduce((acc, curr) => {
    switch (curr) {
    case 'north':
      acc[1] += 1;
      break;
    case 'south':
      acc[1] -= 1;
      break;
    case 'east':
      acc[0] += 1;
      break;
    case 'west':
      acc[0] -= 1;
      break;
    }
    return acc;
  }, [0,0]);
}

/*
// Using a for loop
const finalPosition = function(moves) {
  const result = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'north':
        result[1] += 1;
        break;
      case 'south':
        result[1] -= 1;
        break;
      case 'east':
        result[0] += 1;
        break;
      case 'west':
        result[0] -= 1;
        break;
    }
  }
  return result;
};
*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
const moves2 = [
  'south',
  'south',
  'south',
  'south',
  'south',
  'north',
  'south'
];

console.log(finalPosition(moves));
console.log(finalPosition(moves2));
