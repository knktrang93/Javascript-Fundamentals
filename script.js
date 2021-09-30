let massOfMark = 95;
let heightOfMark = 1.88;
let massOfJohn = 85;
let heightOfJohn = 1.76;

let markBMI = massOfMark / heightOfMark ** 2;
console.log(markBMI);
let johnBMI = massOfJohn / heightOfJohn ** 2;
console.log(johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})!`);
}
