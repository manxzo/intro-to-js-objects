const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
///console.dir(pokemon, { maxArrayLength: null })
///console.log(pokemon[58])
///console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = {noob:false,adept:true,expert:false};
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
let starterMon = [];
for (let i=0;i<pokemon.length;i++){
  if(pokemon[i].starter === true){
    starterMon.push(pokemon[i]);
  }
}
///console.log(starterMon);
game.party.push(starterMon[3]);

///console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
let highHpMon = [];
let poisonMon = [];
let legendaryMon = [];

for (let i=0;i<pokemon.length;i++){
  if(pokemon[i].hp >100){
    highHpMon.push(pokemon[i]);
  }
  if (pokemon[i].type === "poison"){
    poisonMon.push(pokemon[i]);
  }
  if (pokemon[i].name === "Mewtwo" || pokemon[i].name === "Articuno" || pokemon[i].name === "Entei"){
    legendaryMon.push(pokemon[i]);
  }
};

///console.log(highHpMon);
///console.log(poisonMon);
///console.log(legendaryMon);
game.party.push(highHpMon[5],poisonMon[4],legendaryMon[0]);
///console.log(game.party);


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (let i=0;i<game.gyms.length;i++){
  if (game.gyms[i].difficulty <= 3){
    game.gyms[i].completed = true
  }
}

///console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
for(let i=0;i<game.party.length;i++){
  if (game.party[i].starter === true){
    if (game.party[i].number === 1){
      game.party.splice(i,1,pokemon[1]);
    }
    if (game.party[i].number === 4){
      game.party.splice(i,1,pokemon[4]);
    }
    if (game.party[i].number === 7){
      game.party.splice(i,1,pokemon[7]);
    }
    if (game.party[i].number === 25){
      game.party.splice(i,1,pokemon[25]);
    }
  }
}
///console.log(game.party);


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
partyMonNames = [];
for (let i = 0;i<game.party.length;i++){
  partyMonNames.push(game.party[i].name);
}
///console.log(partyMonNames);


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/ 
///Already solved this during Exercise 4 so I'll copy paste as a comment (refer to starterMon Array)

/* let starterMon = [];
for (let i=0;i<pokemon.length;i++){
  if(pokemon[i].starter === true){
    starterMon.push(pokemon[i]);
  }
} 
console.log(starterMon);
*/


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function(pokemonObj){
  game.party.push(pokemonObj);
  return;
}

game.catchPokemon(pokemon[14]);

///console.log(game.party);


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/ 

game.catchPokemon = function(pokemonObj){ 
  /*
  Ignore the if condition until as it ensures the pokeballs cannot become negative until Exercise 19
  Focus only on lines 209 and 210 as that has all the functionality for this exercise */  
  if (game.items[1].quantity > 0){
    game.party.push(pokemonObj);
    game.items[1].quantity -= 1;
    return;
  } 
  else{
    console.log("You have no pokeballs left!")
    return "You have no pokeballs left!";
  }
}

game.catchPokemon(pokemon[80]);
///console.log(game.items[1]);
///console.log(game.party);


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for (let i=0;i<game.gyms.length;i++){
  if (game.gyms[i].difficulty <= 6){
    game.gyms[i].completed = true
  }
}

///console.log(game.gyms);


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function(){
  const gymTally = {completed:0 ,incomplete:0}
  for (let i = 0;i<game.gyms.length;i++){
    if (game.gyms[i].completed === true){
      gymTally.completed += 1;
    }
    else{
      gymTally.incomplete += 1;
    }
  }
  console.log(gymTally);
}

///game.gymStatus();


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function(){
  return game.party.length;
};

///console.log(game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
for (let i=0;i<game.gyms.length;i++){
  if (game.gyms[i].difficulty <= 8){
    game.gyms[i].completed = true
  }
}
/*
Reflection: I just copy paste from Exercise 6/12 and change the value of difficulty :) 
I think I should replace this with a method that takes in one parameter the level of difficulty to change completed to true 
and also to change to false if the difficulty level input is lower than previously set
*/
game.setComplete = function (diff){
  for (let i=0;i<game.gyms.length;i++){
    if (game.gyms[i].difficulty <= diff){
      game.gyms[i].completed = true;
    }
    else {
      game.gyms[i].completed = false;
    };
  }
  return "Game has been completed to difficulty level: " + diff;
}

///game.setComplete(4);
///game.gymStatus();


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

///console.log(game)


/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.party.sort((a,b) => b.hp - a.hp); 
///console.log(game.party);


/*
----------------------------------------------------------------------------------------------
NOTES FOR .sort() FUNCTION:
To sort a array of objects using a element in the object the code you should use is as written below
Given the array below we can sort by 3 different ways Alphabetically,Boolean or Numerically: 
  const arrayObject = [
  {name: Beer,healthy:false ,count:2},
  {name:Chocolate,healthy:false,count:5},
  {name :Apple,healthy:true count:4}]


  Use .localeCompare() for strings:
  arrayObject.sort((a, b) => a.name.localeCompare(b.name)); --> will sort alphabetically but is case-sensitive
  arrayObject.sort((a, b) => b.name.localeCompare(a.name)); --> will sort in reverse alphabetical order also case sensitive
  Logic for numbers:
  arrayObject.sort((a,b) => a.count - b.count); --> will sort in ascending order
  arrayObject.sort((a,b) => b.count - a.count); --> will sort in descending order
  Almost the same logic for boolean since they are treated as numbers 1,0:
  arrayObject.sort((a,b) => a.healthy - b.healthy); --> false first as its 0 (ascending)
  arrayObject.sort((a,b) => b.healthy - a.healthy); --> true first as its 1 (descending)
  -------------------------------------------------------------------------------------------
  */


  /*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Eleven and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];

game.catchPokemon = function(pokemonObj){
  if (game.items[1].quantity > 0 && game.party.length < 6){
    game.party.push(pokemonObj);
    game.items[1].quantity -= 1;
    return;
  }
  else if (game.items[1].quantity > 0 && game.party.length >= 6){
    game.collection.push(pokemonObj);
    game.items[1].quantity -= 1;
    console.log(`Your Party is Full! Sent ${pokemonObj.name} to Collection!`);
    return `Your Party is Full! Sent ${pokemonObj.name} to Collection!`;
  }
  else{
    console.log("You have no pokeballs left!")
    return "You have no pokeballs left!";
  }
}

///console.log(game.partyCount());
///game.catchPokemon(pokemon[60]);


/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

/// Solved in exercise 11 & 18 so just copy pasted here and explained ///

/*
game.catchPokemon = function(pokemonObj){  -------------------> Declare Function
  if (game.items[1].quantity > 0 && game.party.length < 6){ --> If pokeball count more than 0 and party count below 6
    game.party.push(pokemonObj);  ----------------------------> push pokemon to party
    game.items[1].quantity -= 1;  ----------------------------> deduct 1 pokeball
    return;
  }
  else if (game.items[1].quantity > 0 && game.party.length >= 6){ ----> If pokeball count more than 0 and party count 6 or more
    game.collection.push(pokemonObj);  -------------------------------> push pokemon to collection
    game.items[1].quantity -= 1;  ------------------------------------> dedcut one pokeball
    console.log(`Your Party is Full! Sent ${pokemonObj.name} to Collection!`); --> logs whatever pokemon's name u caught
    return `Your Party is Full! Sent ${pokemonObj.name} to Collection!`; --------> remember to use ` [backticks] instead of ' or " [single/double quotes] when selecting a parameter from a a function
  }
  else{
    console.log("You have no pokeballs left!") ------> since this can only happen when there is no pokeball 
    return "You have no pokeballs left!";
  }
}
  */



/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchPokemon = function(nameMon){
  let pokemonObj = null; /// Define pokemonObj as null and use let as u need to assign a object to it later
 for (let i = 0;i<pokemon.length;i++){ /// Iterate through whole list 
  if (nameMon.toLowerCase() === pokemon[i].name.toLowerCase()){ /// compare the strings input and pokemon.name after changing both to lowercase
     pokemonObj = pokemon[i]; /// Assign the object that the input matches with
   break; /// exit the loop
  }
 } ///end the iteration
  if (pokemonObj === null){ ///check if the pokemon wasnt found and the name wasnt changed
   console.log("Selected Pokemon Doesn't Exist")
   return "Selected Pokemon Doesn't Exist"
  }
  else{///if it was found resume the old code
    if (game.items[1].quantity > 0 && game.party.length < 6){
      game.party.push(pokemonObj);
      game.items[1].quantity -= 1;
      console.log(`${pokemonObj.name} has joined the party!`)
    return `${pokemonObj.name} has joined the party`;
    }
    else if (game.items[1].quantity > 0 && game.party.length >= 6){
      game.collection.push(pokemonObj);
      game.items[1].quantity -= 1;
      console.log(`Your Party is Full! Sent ${pokemonObj.name} to Collection!`);
      return `Your Party is Full! Sent ${pokemonObj.name} to Collection!`;
    }
    else{
      console.log("You have no pokeballs left!")
    return "You have no pokeballs left!";
    }
  }
}

///game.catchPokemon("PiKacHu");
///game.catchPokemon("idontexist")


/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const sortedpokemon = {}
const typesArray=[]
for (i=0;i<pokemon.length;i++){
    if (typesArray.includes(pokemon[i].type) === false ){
      typesArray.push(pokemon[i].type)
    }
  }
///console.log(typesArray);
for (i=0;i<typesArray.length;i++){
  sortedpokemon[typesArray[i]] = []; 
}
///console.log (sortedpokemon);
for (i=0;i<pokemon.length;i++){
  for (x=0;x<typesArray.length;x++){
    if (pokemon[i].type === typesArray[x]){
    sortedpokemon[typesArray[x]].push(pokemon[i])
    }
  }
}

///console.log(sortedpokemon);

/* NOTES FOR EXERCISE 21
-----------------------------------------------------------------
Its functional but Im pretty sure it can be improved but if U can't understand the clusterfuck 
that I've written I'll explain below.

const sortedpokemon = {} --------------------------------------> Define an object called sortedpokemon
const typesArray=[] -------------------------------------------> Define an array called typesArray
for (i=0;i<pokemon.length;i++){ -------------------------------> For every oject in the pokemon array
    if (typesArray.includes(pokemon[i].type) === false ){ -----> check if the typesArray includes the type element and if it doesn't 
      typesArray.push(pokemon[i].type)                           push the newly found type to an array with the list of types
    }
  }
///console.log(typesArray); ----------------> Tested typesArray functionality 
for (i=0;i<typesArray.length;i++){ ---------> For every type in typesArray,
  sortedpokemon[typesArray[i]] = []; -------> create an key within the object sortedpokemon that matches with an empty list
}
///console.log (sortedpokemon); ------------> Tested sortedpokemon functionality thus far
for (i=0;i<pokemon.length;i++){ ------------> For every object in pokemon array iterate over every type in types array
  for (x=0;x<typesArray.length;x++){ -------^
    if (pokemon[i].type === typesArray[x]){ ----> If the type of the pokemon object is equal to the type in typesArray at index x
    sortedpokemon[typesArray[x]].push(pokemon[i]) ---> since we used types array to make the sortedpokemon object the key names are the same so,
    }                                             ---> i push the pokemon object with the matching type to the empty list matching the key 
  }                                               ---> so basically since sortedpokemon[key] = [] and key is the type of pokemon that matches
}                                                 ---> I'm just pushing the entire pokemon object into the empty array we created for each type

TLDR: So basically after 5 hours of doing this lab and 600 lines of code later my brain is fried and I tried (ಥ﹏ಥ)
*/
