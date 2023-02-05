var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `Please provide two numbers`;
  } else if (typeof num2 !== "number") {
    return `Please provide two numbers`;
  }
  return num1 * num2;
};

console.log(multiply(3, 5));
console.log(multiply("dog", "cat"));

console.log(multiply("3", "aligator"));
console.log(multiply(-12, 5));
