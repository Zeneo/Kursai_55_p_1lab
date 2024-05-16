"use strict";
console.log('hi');
let username = 'Paulius';
const age = 37;
const someRandom = 'asd';
const arrNums = [2, 3, 5, 7];
const arrStr = ['asd', 'qwe', 'zxc'];
const items = ['asd', 60, true];
const sameName = 4;
const myUser = {
    userName: 'Paulius',
    age: 37,
    city: "Trakai",
    hasCat: true,
    hasDog: 1
};
const myUser2 = {
    userName: 'Paulius',
    city: "Trakai",
    hasCat: true,
    hasDog: 1
};
const myCity = {
    population: 400,
    country: 'Lithuania',
};
function sayName(username) {
    return username;
}
function countData(num1, num2) {
    console.log(num1 + num2);
}
function updateUser(item) {
    console.log(item.userName);
    console.log(item.age);
}
