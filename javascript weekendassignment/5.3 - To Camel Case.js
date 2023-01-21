function toCamelCase(input) {
  return input.toLowerCase().replace(/[-_](.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}
console.log(toCamelCase("The_Stealth_Warrior"));
