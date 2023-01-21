const findShort = (str) => Math.max(...str.split(" ").map((x) => x.length));
console.log(findShort("The quick brown fox ju map"));
