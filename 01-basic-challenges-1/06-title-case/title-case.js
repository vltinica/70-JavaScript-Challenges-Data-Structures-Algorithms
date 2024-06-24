let str = "sHoRt AnD sToUt";

function titleCase(str) {
  let myStr = str.toLowerCase();
  let myArr = myStr.split(" ");
  // console.log(myStr.split(" ,"));
  for (let i = 0; i < myArr.length; i++) {
    // console.log(myArr[i]);
    myArr[i] = myArr[i][0].toUpperCase() + myArr[i].slice(1);
  }
  let titleMyStr = myArr.join(" ");
  return titleMyStr;
}
module.exports = titleCase;
