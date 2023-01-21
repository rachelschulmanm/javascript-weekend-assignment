function make(...parts) {
  return parts
    .map((el) => el[0])
    .join(".")
    .toUpperCase();
}
console.log(make("Patrick", "Feeney"));
