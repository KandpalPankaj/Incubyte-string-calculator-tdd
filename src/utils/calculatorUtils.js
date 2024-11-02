export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
  return numArray.reduce((sum, num) => sum + num, 0);
}
