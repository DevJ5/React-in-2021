"use strict";
var Cat = /** @class */ (function () {
    function Cat(name, group) {
        this.name = name;
    }
    Cat.prototype.setGroup = function (group) {
        this.group = group;
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.setGroup = function (group) {
        this.group = group;
    };
    return Dog;
}());
function initializeAnimal(Animal, name) {
    var animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
}
var cat = initializeAnimal(Cat, 'Felix');
var dog = initializeAnimal(Dog, 'Ava');
