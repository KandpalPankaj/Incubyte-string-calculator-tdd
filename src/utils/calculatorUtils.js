export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");

    const customDelimiters = parts[0]
      .slice(2)
      .split(/[[\]]+/)
      .filter(Boolean);
    delimiter = new RegExp(customDelimiters.join("|"), "g");

    numbers = parts[1];
  }

  const numArray = numbers
    .split(delimiter)
    .map((num) => parseInt(num, 10))
    .filter(Boolean);

  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
