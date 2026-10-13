# Exercise 1 — Functions

## Goal

Practice JavaScript functions: fixed parameters, rest parameters, arrow functions, and copying objects without mutating the original.

## Data used

- `dog` — object with `type`, `weight`, `breed`, `name`
- `myArray` — `[10, 20, 30, 13, 50, 60, 5]`

(Commas were added to the `dog` object so it is valid JavaScript.)

## Tasks

### 1. Sum of two parameters

- Function: `sumTwo(a, b)`
- Returns `a + b`
- Result stored in `sumResult` and printed with `console.log()`

### 2. Any number of parameters → array

- Function: `collectParams(...params)`
- Uses rest parameters (`...`)
- Pushes each argument into a new array and returns that array

### 3. Arrow function with array, operator, and steps

- Function: `sumBySteps(intArray, operator, steps)`
- Walks the array with index step size `steps` (`0`, `steps`, `2 * steps`, …)
- If `operator` is `"+"`, adds selected values; if `"-"`, subtracts them
- Returns the accumulated sum
- Demo uses `myArray` with `("+", 2)` and `("-", 3)`

### 4. Change a copy of `dog`

- Function: `changeDogCopy(dogObj)`
- Creates a shallow copy with `{ ...dogObj }`
- Changes `name`, `weight`, and `breed` on the copy only
- Returns the copy and prints it; original `dog` is also logged to show it is unchanged

## How to run

```bash
cd exercise1
node exercise1.js
```

## How the work was done

1. Created `exercise1.js` with the given `dog` object and `myArray`.
2. Implemented each of the four functions as specified.
3. Added `console.log` calls so each result can be checked when running the file.
4. Documented the approach in this file for course explanation.
