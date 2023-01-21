// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// let findUniq = function (arr) {};

const findUniq = (arr) => {
  let uniq = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    if (uniq !== arr[1] && uniq !== arr[2]) {
      break;
    } else if (arr[i] !== uniq) {
      uniq = arr[i];
      break;
    }
  }
  return uniq;
};
console.log(findUniq([1, 1, 1, 2, 1, 1]));
