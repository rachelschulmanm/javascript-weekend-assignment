// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?

let nb_year = function (p0, percent, inhabitants, populationEnd) {
  let years = 0;
  let populationAtStart = p0;
  let currentPopulation = p0;
  for (
    let i = 0;
    currentPopulation < populationEnd;
    currentPopulation =
      currentPopulation + ((currentPopulation * percent) / 100 + inhabitants)
  ) {
    years += 1;
  }
  return years;
};

console.log(nb_year(1500, 5, 100, 5000));
