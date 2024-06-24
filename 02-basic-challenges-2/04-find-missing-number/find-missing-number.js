function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  let n = arr.length + 1;
  let ojidaemaiatSum = (n * (n + 1)) / 2;

  // let facticheskaiaSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   facticheskaiaSum += arr[i];
  // }
  // return ojidaemaiatSum - facticheskaiaSum;

  let facticheskaiaSum = arr.reduce((a, b) => a + b, 0);
  return ojidaemaiatSum - facticheskaiaSum;
}

module.exports = findMissingNumber;
