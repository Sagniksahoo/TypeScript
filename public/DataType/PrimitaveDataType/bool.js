"use strict";
//The boolean is a primitive type in Typescript
//It represents a simple true/false value. They are implemented as numerical values with a single binary digit (i.e., 0 & 1). The Boolean is an object wrapper for the primitive boolean value.
//boolean declaration
var id1 = false;
var id2 = true;
// primitive boolean type
var isDone = true;
var isPending = false;
console.log(isDone);
console.log(isPending);
console.log(typeof isDone);
//Boolean Global function
var boolvar = Boolean(true);
console.log(boolvar);
console.log(typeof boolvar);
//Truthy & Falsy
console.log(boolvar);
boolvar = Boolean(0);
console.log(boolvar);
boolvar = Boolean(-0);
console.log(boolvar);
boolvar = Boolean(0n);
console.log(boolvar);
boolvar = Boolean('');
console.log(boolvar);
boolvar = Boolean(null);
console.log(boolvar);
boolvar = Boolean(undefined);
console.log(boolvar);
boolvar = Boolean(NaN);
console.log(boolvar);
var boolvar1;
boolvar1 = Boolean(true);
console.log(boolvar1);
boolvar1 = Boolean('test');
console.log(boolvar1);
boolvar1 = Boolean('0');
console.log(boolvar1);
boolvar1 = Boolean('false');
console.log(boolvar1);
boolvar1 = Boolean(100);
console.log(boolvar1);
boolvar1 = Boolean({});
console.log(boolvar1);
var employee1 = { name: 'test' };
boolvar1 = Boolean(employee1);
console.log(boolvar1);
boolvar1 = Boolean([]);
console.log(boolvar1);
boolvar1 = Boolean(new Date());
console.log(boolvar);
boolvar1 = Boolean(Infinity);
console.log(boolvar);
//Boolean Object
var boolVar = new Boolean('test');
console.log(boolVar);
console.log(typeof boolVar);
var boolobj = new Boolean('test');
console.log(boolobj);
console.log(typeof boolobj);
console.log(boolobj.valueOf());
console.log(typeof boolobj.valueOf());
//Boolean vs boolean*
//GLOBAL FUNCTION  Boolean(),Number(),String(),
var b1 = new Boolean(false);
console.log(b1.valueOf()); //false
if (b1) {
    console.log('b is true although b is false'); //
}
//Convert boolean to number
var trueNum = Number(true);
var falseNum = Number(false);
console.log(trueNum);
console.log(falseNum);
console.log(typeof trueNum);
console.log(typeof falseNum);
//Convert boolean to string
var trueStr = String(true);
var falseStr = String(false);
console.log(trueStr);
console.log(falseStr);
console.log(typeof trueStr);
console.log(typeof falseStr);
