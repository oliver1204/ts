// 联合类型
let numOrString: number | string;

// 使用场景
let ele: HTMLElement | null = document.querySelector("#app");

// ! 断言， 一定存在
// ele!.innerHTML = 'abc';

// 上面的代码等价于
ele ? (ele.innerHTML = "aaa") : null;

// 断言强转
let a: string | number | undefined;

(a as number).toFixed(2);

// a as any as boolean; // 双重断言

// 字面量类型
type ITpye = "a" | "b" | "c" | "d";
let type: ITpye = "b";
let type2: ITpye = "c";

// 避免命名冲突
export {};
