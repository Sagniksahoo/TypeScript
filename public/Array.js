"use strict";
let list1 = [1, 2, 3];
console.log('list1:', list1.length);
let list2 = [1, 2, 3];
console.log('list2:', list2.map((e) => e * 2));
let Skills = ['VUE'];
Skills[0] = 'Angular';
Skills[1] = 'React';
Skills.push('NODEJS');
console.log('Skills:', Skills);
let fruits;
fruits = ['Apple', 'Orange', 'Banana'];
let ids;
ids = [23, 34, 100, 124, 44];
let values1 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
let values2 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
//Access Array Elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
//Access Array Elements using Loop
for (var index in fruits) {
    console.log(fruits[index]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.sort();
console.log(fruits);
console.log(fruits.pop());
fruits.push('Papaya');
console.log(fruits);
fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits);
console.log(fruits.indexOf('Papaya'));
