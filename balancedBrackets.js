function balanced(string) {
  const stack = [];
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element == '(' || element == '{' || element == '[') {
      stack.push(element);
    }
    if (element == ')') {
      const topStack = stack.pop();
      if (topStack != '(') {
        return false;
      }
    }
    if (element == '}') {
      const topStack = stack.pop();
      if (topStack != '{') {
        return false;
      }
    }
    if (element == ']') {
      const topStack = stack.pop();
      if (topStack != '[') {
        return false;
      }
    }
  }
  if (stack.length != 0 ) {
    return false;
  } 
  // console.log(stack.length);
  return true;
}

console.log(balanced('()'));
console.log(balanced('({]'));