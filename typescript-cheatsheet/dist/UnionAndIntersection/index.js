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
// Union
function someFn(arg1) {
    if (typeof arg1 === 'string') {
        var arg1Uppercase = arg1.toUpperCase();
    }
    else if (typeof arg1 === 'number') {
        arg1.toFixed();
    }
    else {
        arg1.valueOf;
    }
}
function callMyPet(pet) {
    // Assert
    pet.fly();
    pet.swim();
    // typeguard check down the proto chain
    if ('fly' in pet) {
        pet.fly();
    }
    pet.eat();
}
callMyPet({ swim: function () { }, fly: function () { }, eat: function () { } });
function isDog(pet) {
    return pet.fly !== undefined;
    return pet.hasOwnProperty('fly');
    return 'fly' in pet;
}
// Typeguards with classes are simple with the use of instanceof
var Foo = /** @class */ (function () {
    function Foo(foo, commonProp) {
        this._foo = foo;
        this._commonProp = commonProp;
    }
    return Foo;
}());
var Bar = /** @class */ (function () {
    function Bar(bar, commonProp) {
        this._bar = bar;
        this._commonProp = commonProp;
    }
    return Bar;
}());
function fooBarFunction(obj) {
    if (obj instanceof Foo) {
        return obj._foo;
    }
    else {
        return obj._bar;
    }
}
function X(obj) {
    obj.a;
    obj.b;
}
// Constraint the types
function combine(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
combine({ a: 1 }, { b: 2 });
