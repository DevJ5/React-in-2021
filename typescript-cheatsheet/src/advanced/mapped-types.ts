type Properties = 'propA' | 'propB';

type MyMappedType = {
  [P in Properties]: boolean;
};

type MyMappedType2 = {
  [P in Properties]: P;
};

type MyMappedType3<Props extends string | symbol | number> = {
  [P in Props]: P;
};

type MyNewType = MyMappedType3<Properties>;

// With object
type MyMappedType4<T> = {
  [P in keyof T]: T[P] | null;
};

type MyNewType2 = MyMappedType4<{ a: 1; b: 2 }>;

// Pick
type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type NewPickType = Pick1<{ a: 1; b: 2; c: 3 }, 'a' | 'b'>;

// Record
