// Union
function someFn(arg1: string | number | boolean) {
  if (typeof arg1 === 'string') {
    let arg1Uppercase = arg1.toUpperCase();
  } else if (typeof arg1 === 'number') {
    arg1.toFixed();
  } else {
    arg1.valueOf;
  }
}

interface Bird {
  fly(): void;
  eat(): void;
}

interface Fish {
  swim(): void;
  eat(): void;
}

function callMyPet(pet: Bird | Fish) {
  // Assert
  (<Bird>pet).fly();
  (pet as Fish).swim();
  // typeguard check down the proto chain
  if ('fly' in pet) {
    pet.fly();
  }
  pet.eat();
}

callMyPet({ swim() {}, fly() {}, eat() {} });

function isDog(pet: Bird | Fish): pet is Bird {
  return (<Bird>pet).fly !== undefined;
  return pet.hasOwnProperty('fly');
  return 'fly' in pet;
}

// Typeguards with classes are simple with the use of instanceof
class Foo {
  _foo: number;
  _commonProp: string;
  constructor(foo: number, commonProp: string) {
    this._foo = foo;
    this._commonProp = commonProp;
  }
}

class Bar {
  _bar: number;
  _commonProp: string;
  constructor(bar: number, commonProp: string) {
    this._bar = bar;
    this._commonProp = commonProp;
  }
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    return obj._foo;
  } else {
    return obj._bar;
  }
}

// Intersection
interface IA {
  a: number;
}

interface IB {
  b: number;
}

// type alias
type AandB = IA & IB;

function X(obj: AandB) {
  obj.a;
  obj.b;
}

// Constraint the types
function combine<ObjA extends object, ObjB extends object>(
  objA: ObjA,
  objB: ObjB
): ObjA & ObjB {
  return { ...objA, ...objB };
}

combine({ a: 1 }, { b: 2 });
