// ts 中的泛型
function createArray<T>(times: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(value);
  }
  return result;
}

let r = createArray(6, "aaa");

// 泛型的约束
type withLen = { length: number };
const computeLen = (target: withLen): number => {
  return target.length;
};
let len = computeLen("asdf");
let len2 = computeLen([1, 2]);
// let len3 = computeLen(true) // X

// 关键字 keyof
const getVal = <T extends Object, K extends keyof T>(obj: T, key: K) => {};

getVal({ name: "" }, "name");
// getVal({name: ''}, 'age') // X

export {};
