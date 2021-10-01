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
// let massOfMark = 78;
// let heightOfMark = 1.69;
// let massOfJohn = 80;
// let heightOfJohn = 1.63;

// let markBMI = massOfMark / heightOfMark ** 2;
// console.log(markBMI);
// let johnBMI = massOfJohn / heightOfJohn ** 2;
// console.log(johnBMI);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})!`);
// }

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

// const averageDolphins = (97 + 150 + 76) / 3;
// const averageKoalas = (109 + 80 + 40) / 3;
// console.log(averageDolphins, averageKoalas);
// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log("Team Dolphins win!");
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//   console.log("Team Koalas win!");
// } else if (
//   (averageDolphins == averageKoalas && averageDolphins, averageKoalas >= 100)
// ) {
//   console.log("It's a draw!");
// } else {
//   console.log("No one wins");
// }

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

// const bill = 430;
// let tip;

// if (bill >= 50 && bill <= 300) {
//   tip = bill * 0.15;
// } else {
//   tip = bill * 0.2;
// }
// let total = bill + tip;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value was ${total}`
// );
// ternary operator
// const bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// let total = bill + tip;
// console.log(`bill was ${bill}, tip was ${tip}, total was ${total}`);

// JavaScript Fundamentals – Part 2 Coding Challenge #1 Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! Your tasks: 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores 2. Usethefunctiontocalculatetheaverageforbothteams 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)" 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2 5. Ignoredrawsthistime Test data: § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 Hints: § To calculate average of 3 values, add them all together and divide by 3 § To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
const averageKoalas = calcAverage(23, 34, 27);
const averageDolphins = calcAverage(85, 54, 41);
console.log(averageKoalas, averageDolphins);

function checkWinner(averageDolphins, averageKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Team Dolphins win!(${averageDolphins} vs ${averageKoalas})`);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Team Koalas win!(${averageKoalas} vs ${averageDolphins})`);
  } else {
    console.log("No team wins!");
  }
}
checkWinner(averageDolphins, averageKoalas);
checkWinner(200, 150);
