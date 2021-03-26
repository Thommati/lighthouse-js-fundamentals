const judgeVegetable = function(vegetables, metric) {
  let winner = '';
  let highestMetric = 0;
  for (let veg of vegetables) {
    if (veg[metric] > highestMetric) {
      highestMetric = veg[metric];
      winner = veg.submitter;
    }
  }
  return winner;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

let metric = 'redness';

console.log(judgeVegetable(vegetables, metric));

const vegetables2 = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = 'd'
console.log(judgeVegetable(vegetables2, metric));
