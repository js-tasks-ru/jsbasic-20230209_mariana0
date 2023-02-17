function sumSalary(salaries) {
  let sumSalary = 0;

  for (let key in salaries) {
    let isSalary = typeof (salaries[key]) === 'number' && Number.isFinite(salaries[key]);

    if (isSalary) {
      sumSalary += salaries[key];
    }
  }

  return sumSalary;
}
