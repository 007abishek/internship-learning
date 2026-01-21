"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//1.creating Generic Functions
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3]);
var firstString = getFirst(["a", "b", "c"]);
var emptyResult = getFirst([]);
console.log(firstNumber);
console.log(firstString);
console.log(emptyResult);
//2.Multiple generics
function mergeObjects(obj1, obj2, obj3) {
    return __assign(__assign(__assign({}, obj1), obj2), obj3);
}
var user = mergeObjects({ name: "abishek" }, { age: 21 }, { role: "Developer" });
console.log(user);
//3.Creating Generic Classes
var Storage = /** @class */ (function () {
    function Storage() {
        this.items = [];
    }
    Storage.prototype.add = function (item) {
        this.items.push(item);
    };
    Storage.prototype.getAll = function () {
        return this.items;
    };
    return Storage;
}());
//Number Storage
var numberStorage = new Storage();
numberStorage.add(10);
//numberStorage.add("hello") is not possible (type safety)
//String Storage
var stringStorage = new Storage();
stringStorage.add("TypeScript");
console.log(stringStorage);
console.log(numberStorage);
//5.Generic constraint
function getLength(value) {
    return value.length;
}
console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
//getLength(100);//Error: number has no length
//6.keyOf Constraint
function getProperty(obj, key) {
    return obj[key];
}
var person = {
    name: "Abishek",
    age: 21
};
console.log(getProperty(person, "name"));
//Challenge
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray(10));
console.log(wrapInArray("hello"));
wrapInArray({ role: "dev" });
