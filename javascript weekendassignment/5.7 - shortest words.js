const findShort = (str) => Math.min(...str.split(" ").map((x) => x.length));
console.log(findShort("The quick brown fox ju map"));
