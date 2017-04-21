function forLoop(array){
  //adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times
  for (let i = 0; i < 25; i++){
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
    }
  return array;
}

function whileLoop(n){
  while (n>0) {
    console.log(n);
    n--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  //removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`
  do {
    array.pop()
  } while (maybeTrue() && array.length >= 0);
  return array;
}
