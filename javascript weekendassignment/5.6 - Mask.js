function mask(input1) {
  if (input1.length > 4) {
    let reversed = reverse(input1);
    let newString = "";
    for (let i = 0; i < reversed.length; i++) {
      if (i < 4) {
        newString += reversed[i];
      } else {
        newString += "#";
      }
    }

    return reverse(newString);
  } else {
    return input1;
  }
}

function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(mask("rachel"));
