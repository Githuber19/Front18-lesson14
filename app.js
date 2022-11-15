//1
let myArr = [4, 8, 16, 32, 64];
let sum = myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4];
console.log(sum / myArr.length);

//2
let myArr2 = [
  { name: "gio", age: 22 },
  { name: "dato", age: 32 },
  { name: "zura", age: 40 },
  { name: "nana", age: 37 },
  { name: "levani", age: 18 },
];

console.log(myArr2);

//3
let person1 = {
  firstName: "Levan",
  lastName: "Natadze",
  address: ["tbilisi", "spiridon kedia str"],
  age: 24,
  phoneNumbers: {
    home: 4568796,
    work: 8888888888,
  },
};
console.log(person1);

console.log(
  `My name is ${person1.firstName}, My age is ${person1.age}, My address is ${person1.address}.`