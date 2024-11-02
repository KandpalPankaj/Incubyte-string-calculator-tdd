export function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = /,|\n/;
  [numbers, delimiter] = extractCustomDelimiter(numbers, delimiter);
  const numArray = parseNumbers(numbers, delimiter);
  checkForNegatives(numArray);
  return sumNumbers(numArray);
}

function extractCustomDelimiter(numbers, delimiter) {
  try {
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const customDelimiters = parts[0]
        .slice(2)
        .split(/[[\]]+/)
        .filter(Boolean);
      delimiter = new RegExp(customDelimiters.join("|"), "g");
      return [parts[1], delimiter];
    }
    return [numbers, delimiter];
  } catch (error) {
    throw new Error("Please enter correct delimiters");
  }
}

function parseNumbers(numbers, delimiter) {
  try {
    return numbers
      .split(delimiter)
      .map((num) => parseInt(num, 10))
      .filter(Boolean);
  } catch (error) {
    throw new Error("Please enter correct numbers");
  }
}

function checkForNegatives(numArray) {
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
}

function sumNumbers(numArray) {
  try {
    return numArray.reduce((sum, num) => sum + num, 0);
  } catch (error) {
    throw new Error("Please enter correct numbers");
  }
}
