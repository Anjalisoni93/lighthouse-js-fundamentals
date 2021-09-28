const carPassing = function (cars, speed) {
  // Your code in here ...
  const time = Date.now();
  var person = {
    time : time,
    speed : speed
  }
  
  cars.push(person);
  return cars;
}
