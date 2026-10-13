# Exercise 3 — Promise / File I/O

## Goal

Read and write files with Node.js `fs`, first with callbacks, then with promises and `await`.

## Files

- `text.txt` — source text (created by hand)
- `exercise3.js` — program
- `copy.txt` — written by the callback `writeFile`
- `copy-promise.txt` — written by the promise `writeFile`

## Tasks

### 1. Read `text.txt` (callback)

- `require("fs")`
- `readFile("text.txt", "utf8", callback)`
- Callback: first argument is the error, second is the file text
- Text is printed and stored in the global `fileContent`

### 2. Write a new file (callback)

- Inside the read callback, `writeFile("copy.txt", fileContent, callback)`
- On error: print the error
- On success: print that execution was successful

Write is nested in the read callback so it runs only after the data is available.

### 3. Same flow with promises and `await`

- `require("fs").promises`
- `readFile` / `writeFile` return promises
- `await` waits for each result
- `try/catch` prints errors
- Success message is printed after the write finishes

## How to run

```bash
cd exercise3
node exercise3.js
```

## How the work was done

1. Created `text.txt` with a short sentence.
2. Implemented callback `readFile` and nested callback `writeFile`.
3. Repeated the same steps with `fs.promises` and `await`.
4. Documented the approach in this file for course explanation.
