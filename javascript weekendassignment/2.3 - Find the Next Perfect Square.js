// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.

let findNextSquare = (n) => {
  let rootNumber = Math.sqrt(n);
  if (rootNumber % 1 !== 0 || n <= 0) {
    return "-1";
  } else {
    return (rootNumber + 1) ** 2;
  }
};
console.log(findNextSquare(114));
