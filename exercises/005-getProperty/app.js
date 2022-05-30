function getProperty(obj, key) {
  return obj[key];
}

var car = {
  model: 'Nissan'
};
var output = getProperty(car, 'model');
console.log(output); // --> 'Nissan'