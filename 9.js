class Stack {
  constructor() {
    this.items = [];
    this.reverse = [];
    this.length = 0;
    this.push = (ele) => {
      this.items.push(ele);
      this.length += 1;
    };
    this.pop = () => {
      if (this.length === 0) {
        return -1;
      }
      this.length -= 1;
      return this.items.pop();
    };
    this.peak = () => {
      if (this.length === 0) {
        return -1;
      }
      return this.items[this.length - 1];
    };
    this.addtoReverse = (ele) => {
      let n = ele.length;
      for (let i = 0; i < n; i++) {
        this.reverse.push(ele.pop());
      }
      return this.reverse;
    };
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
console.log("stack items:", s.items);
console.log("stack length:", s.length);
console.log("popped element:", s.pop());
console.log("stack items after pop:", s.items);
s.push(50);
console.log("stack items after push:", s.items);
console.log("reverse stack:", s.addtoReverse(s.items));
