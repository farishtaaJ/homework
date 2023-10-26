// task 1

function getVoteCount (votes)
{
    let {up,down} = votes 
    return up - down 
}
console.log(getVoteCount({ up: 13, down: 0 }));

// task 2 
function volumeOfBox (dimen)
{
    let {width,length,height} = dimen 

    return width * length * height
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));

// task 3 
function fiftyThirtyTwenty (proc)
{
    let needs = proc * 0.5
    let wants = proc * 0.3
    let savings = proc * 0.2

    return {"Needs":needs,"Wants":wants,"Savings":savings}
}
console.log(fiftyThirtyTwenty(10000));

// task 4 
function relationToLuke (person) 
{
    const relations = {

        "Darth Vader": "father",
         "Leia": "sister",
         "Han": "brother in law",
         "R2D2": "droid"
     }; 
    
     return  "Luke I am your" + " " + relations[person];
}
console.log(relationToLuke("Darth Vader"));

// task 7
function nSidedShape(num) {
    
    let shapes = 
    {
      1: "circle",
      2: "line",
      3: "triangle",
      4: "square",
      5: "pentagon",
      6: "hexagon",
      7: "heptagon",
      8: "octagon",
      9: "nonagon",
      10: "decagon"
    };

    return shapes[num];
}
console.log(nSidedShape(3));

//task 8 
function isInRange(num, range) 
{
    return num >= range.min && num <= range.max;
}

console.log(isInRange(4, { min: 0, max: 5 })); 

//task 10
function hasKey(hash, key) 
{
    return key in hash; // in - который проверяет наличие ключа key в объекте hash.
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));

//task 11
function inkLevels(inks) 
{
    let minLevel = Math.min(...Object.values(inks));
    return minLevel;
}
console.log(inkLevels({"cyan": 23, "magenta": 12, "yellow": 10}));

//task 12
function isEmpty(obj) 
{
    return Object.keys(obj).length === 0;
}  
console.log(isEmpty({})); // true

//task 14
function addName(obj, name, value) 
{
    const newObject = Object.assign({}, obj);
    newObject[name] = value;
    return newObject;
}
console.log(addName({}, "Brutus", 300));


//task 18
function getBudgets(arr) 
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].budget;
    }
    return sum;
}
console.log(getBudgets([{ name: "John", age: 21, budget: 23000 },
{ name: "Steve", age: 32, budget: 40000 },
{ name: "Martin", age: 16, budget: 2700 }]));


//task 19
function freeShipping(order)
{
    
    let totalCost = 0;

    for (let item in order) {
      totalCost += order[item];
    }
    
    if (totalCost > 50.00) {
      return true;
    } else {
      return false;
    }
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));

//task 20
function mapping(letters) 
{
    const result = {};
    for (let letter of letters) {
      result[letter] = letter.toUpperCase();
    }
    return result;
}
console.log(mapping(["p", "s"]));

//task 21 
function afterNYears(people, n) 
{
    for (let person in people) {
      people[person] += Math.abs(n);
    }
    return people;
}
console.log(afterNYears({ "Joel" : 32, "Fred" : 44, "Reginald" : 65, "Susan" : 33, 
"Julian" : 13}, 1));

//task 22


//task 23
function removeEntry(obj, item) 
{
    delete obj[item]; 
    return obj;
}
console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));


//task 24
function mostExpensiveItem(stolenItems) 
{
    return Object.keys(stolenItems).reduce(
    (a, b) => stolenItems[a] > stolenItems[b] ? a : b); 
}
console.log(mostExpensiveItem({ piano: 2000,}));

