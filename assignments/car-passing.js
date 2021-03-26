const carPassing = function(cars, speed) {
  cars.push({ speed, time: Date.now() });
  return cars;
};
