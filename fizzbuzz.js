/*
Write a method that returns:
    'Fizz' for multiples of three.
    'Buzz' for the multiples of five.
    For numbers which are multiples of both three and five return 'FizzBuzz'.
    For numbers that are neither, return the input number.
*/
export const fizzbuzz = (number) => {
  if (typeof number !== "number")
    throw new Error("the parameter is not a number");
  if (Number.isNaN(number)) throw new Error("the parameter is NaN");

  /*   if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz"; */
  let output = "";
  const multiples = { 3: "fizz", 5: "buzz" };

  Object.entries(multiples).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word;
  });
  return output ? output : number;
};
