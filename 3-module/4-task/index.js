function showSalary(users, age) {
  return data
  .filter(item => item.age <= age)
  .map(item => `${item.name}, ${item.balance}`)
  .join('\n');
}
