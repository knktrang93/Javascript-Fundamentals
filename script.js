// <!-- Coding Challenge #1 Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). Your tasks:
//     1. Store Mark's and John's mass and height in variables
//     2. Calculate both their BMIs using the formula (you can even implement both versions)
//     3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. Test data: § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */ -->

//     <!-- Coding Challenge #2
//     Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
//     Your tasks:
//     1. Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//     2. Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
//     Hint: Use an if/else statement 😉 -->
let massOfMark = 78;
let heightOfMark = 1.69;
let massOfJohn = 80;
let heightOfJohn = 1.63;

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

//     <!-- Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 -->

const averageDolphins = (97 + 150 + 76) / 3;
const averageKoalas = (109 + 80 + 40) / 3;
console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Team Dolphins win!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log("Team Koalas win!");
} else if (
  (averageDolphins == averageKoalas && averageDolphins, averageKoalas >= 100)
) {
  console.log("It's a draw!");
} else {
  console.log("No one wins");
}
