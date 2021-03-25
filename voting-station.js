// My solution
const chooseStations = function(stations) {
  return stations.filter(s => s[1] >= 20 && (s[2] === 'school' || s[2] === 'community centre')).map(x => x[0]);
}

/*
// Solution using a for loop
const chooseStations = function(stations) {
  result = [];
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      result.push(stations[i][0]);
    }
  }
  return result;
} */


// Check solution
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
