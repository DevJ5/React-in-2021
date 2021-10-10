// Merging interfaces and overloading
interface Cart {
  calculateTotal(): number;
}

interface Cart {
  numberOfItems: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  numberOfItems: 1,
  calculateTotal(options?: { discountCode: number }) {
    let price = 10;
    if (options && options.discountCode) {
      price = 0.9 * 10;
    }
    return price;
  },
};

// Merging namespaces,
// To extend type definitions that are located in some external module and we cant edit them directly.
namespace MyNameSpace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}

namespace MyNameSpace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNameSpace.x;
MyNameSpace.getX;

const someInterface: MyNameSpace.SomeInterface = {
  x: 1,
  y: 2,
};

// Adding properties to functions
function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

someFunction.someProperty;

// Adding static members to enums
enum Vegetables {
  Tomato = 'tomato',
  Onion = 'onion',
}

namespace Vegetables {
  export const makeSalad = () => {
    return Vegetables.Onion + Vegetables.Tomato;
  };
}

const salad = Vegetables.makeSalad();

// Adding static members to classes
class Salad {}

namespace Salad {
  export const availableDressing = ['olive oil', 'yoghurt'];
}

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
