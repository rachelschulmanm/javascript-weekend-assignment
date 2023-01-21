// return a new sorted string the longest possible, containing distinct characters.
let organize = function (s1, s2) {
  let allLetters = [];
  let newString = s1 + s2;
  for (let letter of newString) {
    allLetters.push(letter);
  }
  const unique = new Set(allLetters);
  return Array.from(unique).sort().join("");
};
console.log(organize("rachrl", "dhgnrs"));
