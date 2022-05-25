// 函数

function sum(x: string, y: string): string {
  return x + y;
}

// 指定一个类型 赋予一个可以兼容的类型
type ISun = (x: number, y: number) => number;
const sum2: ISun = (a, b) => {
  return a + b;
};

const sum3 = (a: number, b?: number): number => {
  return a + b!;
};

// 函数重载
function toArray(value: string | number): string[] | number[] {
  if (typeof value === "string") {
    return value.split("");
  } else {
    return value
      .toString()
      .split("")
      .map((item) => Number(item));
  }
}

// 更优解
function toArray1(value: string): string[];
function toArray1(value: number): number[];
function toArray1(value: string | number) {
  if (typeof value === "string") {
    return value.split("");
  } else {
    return value
      .toString()
      .split("")
      .map((item) => Number(item));
  }
}

toArray1("123"); // 正确
// toArray1(false); // 错误

export {};
