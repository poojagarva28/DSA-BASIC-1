class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
    this.push = (Element) => {
      this.items[this.size++] = Element;
    };
    this.pop = () => {
      if (this.size === 0) {
        return -1;
      } else {
        this.size--;
        return this.items.pop();
      }
    };
    this.peak = () => {
      if (this.size === 0) {
        return -1;
      } else {
        return this.items[this.size - 1];
      }
    };
  }
}

function smallestinStack(stack) {
  let smallest = stack.peak();
  while (stack.size !== 0) {
    let current = stack.pop();
    if (current < smallest) {
      smallest = current;
    }
  }
  return smallest;
}

arr = [10, 3, 20, 28, 9, 12];
let s = new Stack();

while (arr.length != 0) {
  s.push(arr.shift());
}

console.log(`Smallest number in stack ${s.items} is ${smallestinStack(s)}`);
