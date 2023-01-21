function getFrequency(string) {
  var freq = {};
  for (let letter of string) {
    if (freq[letter] === undefined) {
      freq[letter] = 1;
    } else if (freq[letter] !== undefined) {
      freq[letter] += 1;
    }
  }
  let counter = 0;
  let occurrences = Object.values(freq);
  occurrences.forEach((element) => {
    if (element > 1) {
      counter++;
    }
  });
  return counter;
}

console.log(getFrequency("Indivisibilities"));
