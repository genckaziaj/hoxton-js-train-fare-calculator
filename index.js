/*

Description
This time we're going to build a train fare calculator. Simple enough, right? 
We're not looking for something too fancy, but you should be able to input your age and the distance you're travelling and get your ticket price.

Instructions
- Ask the user for their age and how far they are travelling (in km)
   -- The price per travelled km will be £0.21
   -- Junior passengers (under 18) get a 20% discount
   -- Senior passengers (over 65) get a 40% discount
- Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

Challenge
Rewrite your program so that the user chooses a starting point and a destination from a list of stations, besides inputting their age, and then get the ticket price. 

You can come up with the stations' names and distances. Try also to code it so that you only need to change the price per km in one place, and all the stations should have the updated price

*/

let age = Number(prompt("How old are you?"));
let distanceTravelling = Number(prompt("How many km are you travelling?"));
let pricePerTravelledKm = 0.21;
let priceTravelled = distanceTravelling * pricePerTravelledKm;

if (age > 0 && age < 18) {
  priceTravelled = priceTravelled - 0.2 * priceTravelled;
  console.log(`You will need to pay £${priceTravelled.toFixed(2)}!`);
} else if (age > 65) {
  priceTravelled = priceTravelled - 0.4 * priceTravelled;
  console.log(`You will need to pay £${priceTravelled.toFixed(2)}!`);
} else if (age && distanceTravelling) {
  console.log(`You will need to pay £${priceTravelled.toFixed(2)}!`);
}
