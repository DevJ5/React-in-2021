// Generic Functions
const genericArrowFunction = <T>(x: T): T => {
  return x;
};

function genericFunction<T>(x: T): T {
  return x;
}

// Generic Interfaces
interface GenericInterface<T> {
  (a: T): T;
  someProp: T;
}

interface GenericInterface<T> {
  <U>(a: U): U;
  someProp: T;
}

// Generic Classes
class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }
  // Cant use generics in statics:
  // static a: P;
  // static someMethod(p:P) {
  //   return p;
  // }
}

interface Expirable {
  expiryDate: Date;
}

interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

const chocoCakes: Array<ChocolateCake> = [{ expiryDate: new Date() }];
const vanillaCakes: VanillaCake[] = [{ expiryDate: new Date() }];

// Function type
type GetExpiredItemsFunction = <Item extends Expirable>(
  items: Item[]
) => Item[];

// Function interface
interface IGetExpiredItemsFunction {
  <Item extends Expirable>(items: Item[]): Item[];
}

// Inline
const getExpiredItems = <Item extends Expirable>(items: Item[]): Item[] => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

// Type arguments explicitly
const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
const expiredVanillaCakes = getExpiredItems<ChocolateCake>(vanillaCakes);

interface test<something> {
  a: something;
}

const y: test<string> = { a: 'hello' };

interface ShoppingCart<ItemId, Item> {
  items: Item[];
  // With this explicitly specified
  addItem(this: ShoppingCart<ItemId, Item>, item: Item): void;
  // With this inferred
  getItemById(itemId: ItemId): Item | undefined;
}

interface Item {
  id: number;
  price: number;
}

const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemById(itemId) {
    return this.items.find((item) => item.id === itemId);
  },
};
