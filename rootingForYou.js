const judgeVegetable = function (vegetables, metric) {
  var value = 0;
  var person = "";
  for(var veggie of vegetables){
    if (veggie[metric] > value){
      person = veggie['submitter'];
      value = veggie[metric];
    }
  }
  return person;
}
