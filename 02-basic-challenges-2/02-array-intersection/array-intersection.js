function arrayIntersection(arr1, arr2) {
  // let interSection = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr2.includes(arr1[i]) && !interSection.includes(arr1[i])) {
  //     interSection.push(arr1[i]);
  //   }
  // }
  // return interSection;

  let interSection = [];
  const myFirstArr = new Set(arr1);

  for (let num of arr2) {
    if (myFirstArr.has(num)) {
      interSection.push(num);
    }
  }
  return interSection;
}

module.exports = arrayIntersection;
