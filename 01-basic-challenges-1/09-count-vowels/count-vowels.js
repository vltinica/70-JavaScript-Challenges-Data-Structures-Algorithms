function countVowels(str) {
  const ourString = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < ourString.length; i++) {
    let char = ourString[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
