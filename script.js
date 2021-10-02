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

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }
// const averageKoalas = calcAverage(23, 34, 27);
// const averageDolphins = calcAverage(85, 54, 41);
// console.log(averageKoalas, averageDolphins);

// function checkWinner(averageDolphins, averageKoalas) {
//   if (averageDolphins >= 2 * averageKoalas) {
//     console.log(`Team Dolphins win!(${averageDolphins} vs ${averageKoalas})`);
//   } else if (averageKoalas >= 2 * averageDolphins) {
//     console.log(`Team Koalas win!(${averageKoalas} vs ${averageDolphins})`);
//   } else {
//     console.log("No team wins!");
//   }
// }
// checkWinner(averageDolphins, averageKoalas);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// function calcTip(bill) {
//   return bill >=50 && bill <=100 ? bill *0.15:bill*0.2;
// const tip = calcTip(100);
// console.log(tip);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);z

// course challenges
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Brother",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Mike", "Peter", "Steven"],
//   hasDriversLiscense: false,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   liscenseSentence: function () {
//     if (this.hasDriversLiscense === true) {
//       return "he has a driver liscense";
//     } else {
//       return "he doesn't have a driver liscense";
//     }
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.liscenseSentence());

// console.log(
//   `${jonas.firstName} is a ${jonas.age}-year old ${
//     jonas.job
//   }, and ${jonas.liscenseSentence()}. `
// );

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// 1,2
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.computedBMI = this.mass / this.height ** 2;
//     return this.computedBMI;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.computedBMI = this.mass / this.height ** 2;
//     return this.computedBMI;
//   },
// };

// console.log(mark.calcBMI());
// console.log(mark.computedBMI);
// console.log(john.calcBMI());
// console.log(john.computedBMI);

// mark.computedBMI > john.computedBMI
//   ? console.log(
//       `${mark.firstName}'s BMI(${mark.computedBMI}) is higher than ${john.firstName}'s (${john.computedBMI}).`
//     )
//   : console.log(
//       `${john.firstName}'s BMI(${john.computedBMI}) is higher than ${mark.firstName}'s (${mark.computedBMI}).`
//     );

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉 Bonus:
// 4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 100 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }
// console.log(tips);
// console.log(totals);

// const caclAverage = function (arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(caclAverage(totals));

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]
// GOOD LUCK 😀

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

// print each array element with `°C in x days`
//

const printForecast = function (arr) {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    const days = i + 1;
    const degrees = arr[i];
    str = str + `${degrees}°C degrees in ${days} days, `;
  }
  console.log(str);
};
printForecast(arr2);
