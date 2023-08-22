// console.log("its working");
// console.error("oh! Noo!!!");
// console.log(document);

let mystery = 5;
if (mystery) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY");
}

let password = "rahul kumar";
if (password.length >= 8 && password.indexOf(" ") === -1) {
    console.log("valid password");
}
else {
    console.log("invalid password");
}

let flavour = "watermelon";
if (!(flavour == "watermelon" && flavour == "cherry")) {
    console.log("we dont have any flavour");
}
else {
    console.log("we have availabel of juice");
}

let flavour1 = "watermelon";
if (!(flavour1 == "watermelon" || flavour1 == "cherry")) {
    console.log("we dont have any flavour");
}
else {
    console.log("we have availabel of juice");

}

// array method push, pop , shift , unshift

let topsongs = [
    "first time ever i saw your face",
    "God only knows",
    "A day in life",
    "Life on the Mars"
];
topsongs[3] = "life on the earth";
topsongs.push("bhawat geeta is a very famous book");

let fruits = ["mango", "apple", "banana"];
let veggies = ["patato", "onion", "pea"];
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
console.log(fruits.pop());
console.log(fruits.push("banana"));

// splice method

let animals = ["tiger", "lion", "cheetah", "bear", "kangaroo"]
// console.log(animals.splice(1,0,'bear'));
console.log(animals);
animals.splice(2, 2, 'elephant');
console.log(animals);

// sort method

let people = ["rahul", "abhishekh", "suman", "vinayak", "pappu"];
console.log(people.sort());

let num = [10, 23, 11, 45, 5, 12];
let num1 = num;
console.log(num1);
num.push(40);
console.log(num);
console.log(num1);


const data = {
    totalsteps: 34562,
    totalmiles: 456.9,
    avgcalorieburn: 4568,
    workout_of_this_week: '5 of 7',
    avg_good_sleep: '2:30'
};
const res = Object.keys(data);
let resu = Object.values(data);
// let keys = object.keys(data);
console.log(res);
console.log(resu);


let numbers = {
    100: "one hundred",
    55: 'fifity five',
    running: '5km',
    '23 years': 'rahul'
};
console.log(numbers.running);  // when the key started with words we show in dot(.)
console.log(numbers[55]);     // when the key started with numbers we show in square[] bricate[]
console.log(numbers['23 years']);

const usereviws = {};
usereviws['queenbeen49'] = 4.0;
usereviws.mrsmith79 = 3.5;
usereviws.mrsmith79 += 2.5;
console.log(usereviws.mrsmith79 + " rrrr");

