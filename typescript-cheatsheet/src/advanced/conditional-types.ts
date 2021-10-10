type SomeType = number;
type MyConditionalType = SomeType extends string ? string : null;

function conditionalFunction<T>(value: T) {}

const weird: 'weird' = <'weird'>'Weird type';
