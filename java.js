const obj1 = { frist: 20, second: 30, frist: 50 };
console.log(obj1);

let n = 24;
let l = 0, r = 100, ans = n;
while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid <= n) {
        ans = mid;
        l = mid + 1;
    } else {
        r = mid - 1;
    }
}
console.log(ans);


const example = ({ a, b, c }) => {
    console.log(a, b, c);
};
example(0, 1, 2);


let array = [10, 20, 30, 40, 50];
let first = array[0];
let last = array[array.length - 1];

console.log(`First: ${first}, Last: ${last}`);


let Array = [10, 20, 30, 40, 50];
for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
}


const arr = [1, [2, 3], [4, [5, 6]]];

const flatten = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatten);


// Filter()
const Numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = Numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  

// find()
const numbers = [1, 2, 3, 4, 5, 6];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); 


// How do you loop through  the properties of an object in java script?

const person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}


// How do you check  if an object has a property in java script?

const Person = { name: "John", age: 30 };

console.log("name" in Person);  // true
console.log("city" in Person);  // false
