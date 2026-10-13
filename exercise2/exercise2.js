class MenuOrder {
  #burgerPrice = 8.5;
  #friesPrice = 3.25;
  #burgers;
  #fries;

  constructor(burgers, fries) {
    this.#burgers = burgers;
    this.#fries = fries;
  }

  calculateTotal() {
    return this.#burgers * this.#burgerPrice + this.#fries * this.#friesPrice;
  }

  get totalCost() {
    return this.calculateTotal();
  }

  get burgers() {
    return this.#burgers;
  }

  set burgers(count) {
    this.#burgers = count;
  }

  get fries() {
    return this.#fries;
  }

  set fries(count) {
    this.#fries = count;
  }
}

const order1 = new MenuOrder(2, 1);
const order2 = new MenuOrder(1, 3);
const order3 = new MenuOrder(4, 2);

console.log("Order 1 total:", order1.totalCost);
console.log("Order 2 total:", order2.totalCost);
console.log("Order 3 total:", order3.totalCost);

order3.burgers = 5;
order3.fries = 1;
console.log("Order 3 after set:", order3.totalCost);
