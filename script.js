//1a
const jedi = [];

//1b
// jedi[0] = "luke";
jedi[jedi.length] = "Luke";
//jedi.length always adds to the end of array
console.log(jedi);

//1c
jedi.push("obi-won");
console.log(jedi);
//pushes item into array at the end

//1d
jedi.unshift("yoda");
console.log(jedi);
//puts item in the front of array

//1e
console.log(jedi[1]);

//f
jedi.pop();
console.log(jedi);
//pops item from end out of array

//1g
console.log(jedi.shift());
console.log(jedi);
//removes from beggining of array

console.log("==============================");
console.log("==============================");
//2a
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

//2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

//2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

//2d
console.log(starWarsVillians.slice(0, 2));

//3a
const droids = {
  astromech: "R2-D2",
  protocol: "C3PO",
  assassin: "IG-88",
};

//3b
console.log(droids[`astromech`]);

//3c
console.log(droids.protocol);

//3d
droids.assassin = "IG-11";
console.log(droids);

droids[`assassin`] = [`IG-88`];
console.log(droids);

console.log("===================");
console.log("===================");

//BONUS

//4
console.log(starWarsVillians[0][6]);

//5
console.log(sithLords.slice(1, 2));
console.log(sithLords.slice(-2, -1));

//6a
const starWarsMovies = [
  {
    episodeOne: "The Phantom Menace",
    episodeTwo: "Attack of the Clones",
    episodeThree: "Revenge of the Sith",
  },

  {
    episodeFour: "A New Hope",
    episodeFive: "The Empire Strikes Back",
    episodeSix: "Return of the Jedi",
  },

  {
    episodeSeven: "The Force Awakens",
    episodeEight: "The Last Jedi",
    episodeNine: "The Rise of Skywalker",
  },
];

//6b
starWarsMovies.splice(1, 0, ["solo", "Rogue One"]);
console.log(starWarsMovies);

//1 = where you start
//0 = amount of items to remove
//new values

console.log("==========================");
console.log("==========================");

const num = [0, 1, 2, 3, 4, 5];
console.log(num.slice(2, 4)); //2,3

//first number = starting point, removes everything in front of it
//2nd number = removes everything after (including number

console.log(num.slice(3)); //3,4,5

//will remove every index in front of number

console.log(num.indexOf(5)); //5

console.log(num.reverse());
// [5, 4, 3, 2, 1, 0];

console.log(num.includes(7)); //false

num.splice(0, 6, 7);
console.log(num);
//starting at index 0 remove 6 items, add in number 7
//console.log will alter splice outcome

// console.log(num.splice(0, 6));
//5,4,3,2,1,0
//makes new array with all removed items

num.splice(0, 6, [5, 4, 6, 7, 8, 9]);
console.log(num);

const arry = [0, 1, 2, 3];

arry.splice(2, 1, 4);
console.log(arry);

console.log(`===============================`);
console.log(`===============================`);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April
