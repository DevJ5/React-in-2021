"use strict";
var myCart = {
    numberOfItems: 1,
    calculateTotal: function (options) {
        var price = 10;
        if (options && options.discountCode) {
            price = 0.9 * 10;
        }
        return price;
    },
};
// Merging namespaces,
// To extend type definitions that are located in some external module and we cant edit them directly.
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.x = 10;
})(MyNameSpace || (MyNameSpace = {}));
(function (MyNameSpace) {
    MyNameSpace.getX = function () { return MyNameSpace.x; };
})(MyNameSpace || (MyNameSpace = {}));
MyNameSpace.x;
MyNameSpace.getX;
var someInterface = {
    x: 1,
    y: 2,
};
// Adding properties to functions
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProperty = 10;
})(someFunction || (someFunction = {}));
someFunction.someProperty;
// Adding static members to enums
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    Vegetables.makeSalad = function () {
        return Vegetables.Onion + Vegetables.Tomato;
    };
})(Vegetables || (Vegetables = {}));
var salad = Vegetables.makeSalad();
// Adding static members to classes
var Salad = /** @class */ (function () {
    function Salad() {
    }
    return Salad;
}());
(function (Salad) {
    Salad.availableDressing = ['olive oil', 'yoghurt'];
})(Salad || (Salad = {}));
Salad.availableDressing;
// React
// import { renderToString } from 'react-dom/server';
// declare module 'react' {
//   interface Component {
//     helloWorld(): string;
//   }
//   export function foo(): void;
// }
// React.Component.prototype.helloWorld = function () {
//   return 'Hello World!';
// };
// class MyComponent extends React.Component {
//   render() {
//     return <div>{this.helloWorld()}</div>;
//   }
// }
// console.log(renderToString(<MyComponent />));
