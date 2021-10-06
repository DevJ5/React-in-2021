"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Boolean
var b = true;
// Number
var num = 1 + 1 + 1 + 0x1;
// String
var hello = 'Hello';
var world = 'World';
var helloWorld = "\n  " + hello + "\n  " + world + "\n";
// Null and Undefined
var n = null;
var u = undefined;
//let someNumber: number = null;
var someNumber = 0;
function uppercaseFirstLetter(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);
var myObj = new Map();
// Void
function log(message) {
    console.log(message);
    //return 'a string';
}
// Array
var array1 = ['x', 'y'];
var array2 = array1;
// Tuple
var tuple = ['str', 1];
// Enum
var Color;
(function (Color) {
    Color["Red"] = "r";
    Color["Green"] = "g";
    Color["Blue"] = "b";
})(Color || (Color = {}));
var myFavoriteColor = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color['Red']);
// Any
var ANY;
ANY = 'a string';
ANY = 1;
ANY = true;
// Type Assertions
var email = typeof document !== 'undefined' ? document.getElementById('email') : null;
if (email) {
    email.addEventListener('change', function (e) {
        var input = e.currentTarget;
        var input2 = e.currentTarget;
        console.log(input.value);
    });
}
var profile = {
    name: 'John',
};
var a = { someProp: 'some prop' };
a.x = 1;
a.y = 2;
var sum = function (a, b) { return a + b; };
var child = {
    x: 'some string',
    y: 'another string',
    z: 10,
};
var sum2 = function (a, b) {
    if (a === void 0) { a = 10; }
    return a + (b || 0);
};
// Unknown number of arguments
function sumEverything(arg1, arg2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    return numbers.reduce(function (curr, next) { return curr + next; }, 0);
}
function calcArea() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 2)
        return args[0] * args[1];
    return Math.pow(args[0], 2);
}
var Robot = /** @class */ (function () {
    function Robot(name) {
        this._name = name;
    }
    Robot.isColorAvailable = function (color) {
        return Robot.availableColors.includes(color);
    };
    Robot.prototype.askName = function () {
        console.log("My name is " + this.name);
    };
    Robot.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + " meters");
    };
    Object.defineProperty(Robot.prototype, "name", {
        get: function () {
            return this._name;
        },
        // Use _name for the property name and name for the setter. (They can't be the same)
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Robot.prototype, "color", {
        set: function (value) {
            if (Robot.isColorAvailable(value))
                this._color = value;
            else
                throw new Error("Color " + value + "not available!");
        },
        enumerable: false,
        configurable: true
    });
    Robot.availableColors = ['green', 'yellow'];
    return Robot;
}());
var robot = new Robot('Botty');
robot.move(10);
var FlyingRobot = /** @class */ (function (_super) {
    __extends(FlyingRobot, _super);
    function FlyingRobot(name, jetpackSize) {
        var _this = _super.call(this, name) || this;
        _this.jetpackSize = jetpackSize;
        return _this;
    }
    FlyingRobot.prototype.move = function (distance) {
        console.log(this.name + " is flying");
        _super.prototype.move.call(this, distance);
    };
    return FlyingRobot;
}(Robot));
// public = default -> accesible outside of the classes
// protected -> accessible in the classes and any of its subclasses
// private -> only accessible in the class, but still works in the js file
// #name -> only accessible in the class and also not available in the js file
// readonly -> extra modifier to make the property unchangeable
var flyingRobot = new FlyingRobot('Flybotty', 2);
flyingRobot.name = 'Superman';
flyingRobot.move(10);
