console.clear();

class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
    this.push = (element) => {
      this.items.push(element);
      this.length += 1;
    };
    this.pop = () => {
      if (this.length == 0) {
        return -1;
      }
      this.length -= 1;
      return this.items.pop();
    };
    this.peek = () => {
      if (this.length == 0) {
        return -1;
      }
      return this.items[this.length - 1];
    };
  }
}

let stack = new Stack();

let arr = [13, 11, 8, 4, 19, 22];
let rev = [];

for (let i = 0; i < arr.length; i++) {
  stack.push(arr[i]);
}
console.log("input stack:", stack.items);
for (let i = 0; i < arr.length; i++) {
  rev.push(stack.pop());
  //   arr[i] = stack.pop();
}

console.log("reversed stack:", rev);
