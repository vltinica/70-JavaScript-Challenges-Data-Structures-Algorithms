function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// function findMaxNumber(arr) {
//   let myMaxNum = Math.max(...arr);
//   return myMaxNum;
// }

module.exports = findMaxNumber;
