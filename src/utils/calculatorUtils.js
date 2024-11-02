export function add(numbers) {
  if (numbers === "") return 0;
  const numArray = numbers.split(/,|\n/).map((num) => parseInt(num, 10));
  return numArray.reduce((sum, num) => sum + num, 0);
}
