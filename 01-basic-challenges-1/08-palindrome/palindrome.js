// function isPalindrome(str) {
//   let myStr = str.toLowerCase();
//   let reverseStr = "";

//   for (let i = myStr.length - 1; i >= 0; i--) {
//     reverseStr += myStr[i];
//   }

//   return myStr === reverseStr;
// }

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert the string to lowercase
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Reverse the string
  const reversedStr = formattedStr.split("").reverse().join("");
  // Return whether the formatted string is equal to the reversed string
  return formattedStr === reversedStr;
}
module.exports = isPalindrome;
