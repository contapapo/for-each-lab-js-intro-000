function iterativeLog(array) {
  array.forEach((element,index) =>
  {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  array = ["apple", "grape", "lemon"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {

}
