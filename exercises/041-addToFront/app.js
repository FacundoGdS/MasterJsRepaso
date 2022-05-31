function addToFront(arr, element) {
  let newA = arr;
  newA.unshift(element);
  return newA;
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift