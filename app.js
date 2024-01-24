console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let int = 7;
let guessNumber = prompt("What is the magic number?");

if (guessNumber < int){
  console.log("too low");
}
else if (guessNumber > int){
  console.log("too high");
}
else if (guessNumber = int){
  console.log("Congratualtions!!!");
}

//Exercise 2

let birthMonth = prompt("What is your birth month?");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case"may":
      console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Autumn");
    break;
  default:
    console.log("I do not recognize that month");
}
//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    console.log("Tank top");
      break;
  case "02":
    console.log("T-shirt");
      break;
  case "03":
    console.log("Long Sleeve");
      break;
  case "04":
    console.log("Sweat Shirt");
      break;
  default:
    console.log("Other");
}

switch (colorId.toUpperCase()) {
  case "BK":
    console.log("Black");
      break;
  case "BL":
    console.log("Blue");
      break;
  case "RD":
    console.log("Red");
      break;
  case "PU":
    console.log("Purple");
      break;
  default:
    console.log("White");
}

switch (sizeId.toUpperCase()) {
  case "S":
    console.log("Small");
      break;
  case "M":
    console.log("Medium");
      break;
  case "L":
    console.log("Large");
      break;
  case "XL":
    console.log("Extra Large");
      break;
  default:
    console.log("One Size Fits All");
}

console.log(`Product: ${size} ${color} ${type}`);


