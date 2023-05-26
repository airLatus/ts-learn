let say = "hello";

function sum(a: number, b: number) {
  return a + b;
}

let num = sum(1, 2);

let res;

let phoneNum: string = "123";

function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

console.log(isOdd(3));

let ary: Array<number>;

let ary2: number[];

let nObj: object = {
  name: "Allen Yeager",
  age: 19,
};

function printValues(obj: object) {
  const vals = Object.values(obj);
  vals.forEach((item) => console.log(item));
}

printValues(nObj);

let name: string | undefined;

if (typeof name === "string") {
  // 类型保护
  name;
}

//  这个两个函数不会结束
function throwError(msg: string): never {
  throw new Error(msg);
}
function alwaysLoad(): never {
  while (true) {
    //...
  }
}

let gender: "男" | "女";

let tu: [string, number];

tu = ["s", 2];

type Gender = "男" | "女";

type OType = {
  name: string;
  age: number;
  gender: Gender;
};

let o: OType[] = [
  {
    name: "Allen yeager",
    age: 19,
    gender: "男",
  },
];

function getUser(): OType[] {
  return [];
}

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("a和b必须是同类型");
}

const result = combine(3, 2);

function summary(a: number, b: number, c?: number) {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
}

summary(1, 3);
summary(1, 3, 9);
