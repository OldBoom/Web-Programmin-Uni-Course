# Exercise 2 — Menu items price calculator

## Goal

Practice a JavaScript class with private fields, a constructor, a calculation method, and a getter.

## Class: `MenuOrder`

- Private prices: `#burgerPrice` (8.5), `#friesPrice` (3.25)
- Private quantities: `#burgers`, `#fries`
- Constructor takes how many burgers and fries are ordered
- `calculateTotal()` returns quantity × price for both items
- `get totalCost` returns the value from `calculateTotal()`

Extra (optional practice): getters/setters for `burgers` and `fries`.

## Demo objects

- `order1` — 2 burgers, 1 fries
- `order2` — 1 burger, 3 fries
- `order3` — 4 burgers, 2 fries (then updated via setters)

Totals are printed with `console.log()`.

## How to run

```bash
cd exercise2
node exercise2.js
```

## How the work was done

1. Created `MenuOrder` with private price and quantity fields.
2. Added constructor, `calculateTotal()`, and `totalCost` getter.
3. Instantiated three orders and logged each total.
