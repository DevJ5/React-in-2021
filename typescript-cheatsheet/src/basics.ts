// Boolean
let b: boolean = true;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = 'Hello';
const world: string = 'World';
const helloWorld = `
  ${hello}
  ${world}
`;

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

//let someNumber: number = null;
let someNumber: number = 0;

function uppercaseFirstLetter(str: string | null) {
  if (str) {
    return str[0].toUpperCase() + str.substr(1);
  }
}

console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map();

// Void
function log(message: string): void {
  console.log(message);
  //return 'a string';
}

// Array
let array1: string[] = ['x', 'y'];
let array2: Array<string> = array1;

// Tuple
let tuple: [string, number] = ['str', 1];

// Enum
enum Color {
  Red = 'r',
  Green = 'g',
  Blue = 'b',
}

let myFavoriteColor: Color = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color['Red']);

// Any
let ANY: any;
ANY = 'a string';
ANY = 1;
ANY = true;

// Type Assertions
const email =
  typeof document !== 'undefined' ? document.getElementById('email') : null;

if (email) {
  email.addEventListener('change', (e) => {
    const input = e.currentTarget as HTMLInputElement;
    const input2 = <HTMLInputElement>e.currentTarget;
    console.log(input.value);
  });
}

// Interfaces
interface Profile {
  readonly name: string;
  age?: number;
}

let profile: Profile = {
  name: 'John',
};

// Index signature
interface A {
  someProp: string;
  [key: string]: number | string;
}

const a: A = { someProp: 'some prop' };
a.x = 1;
a.y = 2;

// Call signature
interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a, b) => a + b;

// Extending interfaces
interface Parent {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Child extends Parent, Parent2 {
  z: number;
}

const child: Child = {
  x: 'some string',
  y: 'another string',
  z: 10,
};

// Function signature
type sumFn = (a: number, b?: number) => number;
const sum2: sumFn = (a = 10, b) => a + (b || 0);

// Unknown number of arguments
function sumEverything(
  arg1: string,
  arg2: boolean,
  ...numbers: number[]
): number {
  return numbers.reduce((curr, next) => curr + next, 0);
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(width: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) return args[0] * args[1];
  return Math.pow(args[0], 2);
}

class Robot {
  _color?: string;
  private _name: string;

  static availableColors = ['green', 'yellow'];
  static isColorAvailable(color: string) {
    return Robot.availableColors.includes(color);
  }

  constructor(name: string) {
    this._name = name;
  }

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }

  // Use _name for the property name and name for the setter. (They can't be the same)
  set name(value: string) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set color(value: string) {
    if (Robot.isColorAvailable(value)) this._color = value;
    else throw new Error(`Color ${value}not available!`);
  }
}

const robot = new Robot('Botty');
robot.move(10);

class FlyingRobot extends Robot {
  protected jetpackSize: number;

  constructor(name: string, jetpackSize: number) {
    super(name);
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    console.log(`${this.name} is flying`);
    super.move(distance);
  }
}

// public = default -> accesible outside of the classes
// protected -> accessible in the classes and any of its subclasses
// private -> only accessible in the class, but still works in the js file
// #name -> only accessible in the class and also not available in the js file
// readonly -> extra modifier to make the property unchangeable

const flyingRobot = new FlyingRobot('Flybotty', 2);
flyingRobot.name = 'Superman';
flyingRobot.move(10);
