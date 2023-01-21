// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const arr = [1, 0, 0, 1];
const parseArray = (arr) => {
  const binaryString = arr.join("");
  return parseInt(binaryString, 2);
};
console.log(parseArray(arr));
