function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
  }
  return false;
}

function postfix_to_prefix(postfixinput) {
  let s = [];

  let length = postfixinput.length;

  for (let i = 0; i < length; i++) {
    if (isOperator(postfixinput[i])) {
      let op1 = s[s.length - 1];
      s.pop();
      let op2 = s[s.length - 1];
      s.pop();

      let temp = postfixinput[i] + op2 + op1;

      s.push(temp);
    } else {
      s.push(postfixinput[i] + "");
    }
  }

  let ans = "";
  while (s.length > 0) ans += s.pop();
  return ans;
}

let postfixinput = "ACB/+AD/F-*";

console.log(
  `prefix of postfix expression : ${postfixinput} is`,
  postfix_to_prefix(postfixinput)
);
