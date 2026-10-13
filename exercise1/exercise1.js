let dog = {
  type: "Dog",
  weight: 30,
  breed: "German Shepherd",
  name: "Peter",
};

let myArray = [10, 20, 30, 13, 50, 60, 5];

// 1. Sum of two parameters
function sumTwo(a, b) {
  return a + b;
}

const sumResult = sumTwo(10, 20);
console.log("1. Sum of two parameters:", sumResult);

// 2. Any number of parameters collected into a new array
function collectParams(...params) {
  const newArray = [];
  for (let i = 0; i < params.length; i++) {
    newArray.push(params[i]);
  }
  return newArray;
}

console.log("2. Collected parameters:", collectParams(1, "hello", true, dog));

// 3. Arrow function: walk array by steps, add or subtract selected values
const sumBySteps = (intArray, operator, steps) => {
  let sum = 0;
  for (let i = 0; i < intArray.length; i += steps) {
    if (operator === "+") {
      sum += intArray[i];
    } else if (operator === "-") {
      sum -= intArray[i];
    }
  }
  return sum;
};

console.log("3. Sum with + and steps 2:", sumBySteps(myArray, "+", 2));
console.log("3. Sum with - and steps 3:", sumBySteps(myArray, "-", 3));

// 4. Change a copy of dog; original stays unchanged
function changeDogCopy(dogObj) {
  const dogCopy = { ...dogObj };
  dogCopy.name = "Don Quixote";
  dogCopy.weight = 155;
  dogCopy.breed = "Fiend";
  return dogCopy;
}

const changedDog = changeDogCopy(dog);
console.log("4. Changed dog copy:", changedDog);
console.log("4. Original dog (unchanged):", dog);
