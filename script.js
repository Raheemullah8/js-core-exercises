// Task 1: Sum of all numbers using reduce
const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalSum = numbersArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(totalSum); // 54

// Task 2: Filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Task 3: Filter odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5, 7, 9]

// Task 4: Square of numbers using map
const smallNumbers = [1, 2, 3, 4, 5];
const squares = smallNumbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// Task 5: Square of even numbers
const evenSquares = smallNumbers.filter(num => num % 2 === 0).map(num => num * num);
console.log(evenSquares); // [4, 16]

// Task 6: Sum of squares of odd numbers
const numbersFull = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddSquaresSum = numbersFull
  .filter(num => num % 2 !== 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log(oddSquaresSum); // 165

// Task 7: Maximum number using reduce
const sampleNumbers = [5, 12, 45, 7, 30, 2];
const maxNumber = sampleNumbers.reduce((prev, curr) => (prev > curr ? prev : curr), 0);
console.log(maxNumber); // 45

// Task 8: Minimum number using reduce
const numbersForMin = [45, 12, 67, 3, 89, 21];
const minNumber = numbersForMin.reduce((prev, curr) => {
  console.log("Prev:", prev, "Curr:", curr);
  return prev < curr ? prev : curr;
}, 10);
console.log(minNumber); // 3

// Task 9: Maximum number using reduce (alternative)
const numbersForMax = [45, 12, 67, 3, 89, 21];
const maxReduceNumber = numbersForMax.reduce((prev, curr) => (prev > curr ? prev : curr), 0);
console.log(maxReduceNumber); // 89

// Task 10: Find first number greater than 10
const numbersToFind = [3, 7, 12, 5, 20];
const firstNumberGreaterThan10 = numbersToFind.find(num => num > 10);
console.log(firstNumberGreaterThan10); // 12

// Task 11: Check if any number is greater than 15
const numbersForSome = [3, 7, 12, 5, 20];
const isAnyGreaterThan15 = numbersForSome.some(num => num > 15);
console.log(isAnyGreaterThan15); // true

// Task 12: Check if all numbers are greater than 3
const numbersForEvery = [3, 7, 12, 5, 20];
const areAllGreaterThan3 = numbersForEvery.every(num => num > 3);
console.log(areAllGreaterThan3); // false

// Task 13: Sort numbers ascending
const numbersToSort = [40, 100, 1, 5, 25, 10];
const sortedAscending = [...numbersToSort].sort((a, b) => a - b);
console.log(sortedAscending); // [1, 5, 10, 25, 40, 100]

// Task 14: Sort numbers descending
const sortedDescending = [...numbersToSort].sort((a, b) => b - a);
console.log(sortedDescending); // [100, 40, 25, 10, 5, 1]

// Task 15: Sort strings alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // ["Apple", "Banana", "Mango", "Orange"]

// Task 16: Check if array includes a value
const numbersForInclude = [1, 2, 3, 4, 5];
const includesThree = numbersForInclude.includes(3);
console.log(includesThree); // true
