const arr1: number[] = [];
const arr2: (number | string)[] = []; // 联合类型
const arr3: Array<boolean> = [true]; // 范型

// 元祖， ts自己写的，内容固定
const tuple: [string, boolean, number] = ["a", true, 1];
tuple.pop();
tuple.push("rds");
// tuple[3] = 100, 不能用索引来更改元祖

// 枚举
const enum ROll {
  // const可加可不加，加上不可以反举，更简洁，一般都是常量枚举
  USER = "USER",
  ADMIN = 5,
}
// null， undefined
let u: undefined = undefined;
let n: null = null;
// never 出错，死循环，永远走不到的判断

function throwError(): never {
  throw new Error();
}

function whileTrue(): never {
  while (true) {}
}

// void 表示函数的返回值，也可以描述变量 void只能赋予 null和undefined

export {};
