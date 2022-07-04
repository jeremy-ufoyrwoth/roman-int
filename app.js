let romanNumeral = "";

let romanToInt = function (s) {
  let int = 0;
  let num = 0;
  let numArr = [];
  let err = "";

  // check if s >= 1 && <= 15
  if (s.length < 1) {
    return "!Error: String is less than 1";
  }

  if (s.length > 15) {
    return "!Error: String is greater than 15";
  }

  // turn s into array and loop through the new string array. Call the romanIntMap function that maps Roman numeral figures to their interger values. Function romanIntMap returns 0 if roman numeral is not valid and throws error else it pushes it into the numArr array
  Array.from(s).forEach((roman) => {
    if (romanIntMap(roman) === 0) {
      err = "!Error: String contains invalid character";
    }
    numArr.push(romanIntMap(roman));
  });

  // loop through the numArr array and add up the integers. First check if the current numArr element is less than the next, if yes then subtract it from the next and save the result ina variable num and then add num to int and increase the iterator i plus 1 to mmove to skip the two elements and move to the next
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < numArr[i + 1]) {
      num = numArr[i + 1] - numArr[i];
      int += num;
      i += 1;
    } else {
      int += numArr[i];
    }
  }

  // check if the sum of integers is greater than 3999, if yes throw an error else return the sum int
  if (int > 3999) {
    return "!Error: Value greater than 3999";
  }

  if (err !== "") {
    return err;
  }
  return int;
};

// function to map roman numeral characters to their respective integer values using switch statement
function romanIntMap(roman) {
  let romanInt = 0;

  switch (roman) {
    case "I":
      romanInt = 1;
      break;
    case "V":
      romanInt = 5;
      break;
    case "X":
      romanInt = 10;
      break;
    case "L":
      romanInt = 50;
      break;
    case "C":
      romanInt = 100;
      break;
    case "D":
      romanInt = 500;
      break;
    case "M":
      romanInt = 1000;
      break;
    default:
      romanInt = 0;
      break;
  }

  return romanInt;
}
// print the result of the computed roman numeral
console.log(romanToInt(romanNumeral));
