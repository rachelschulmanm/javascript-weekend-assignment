//filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
//forEach
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));
// map

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
