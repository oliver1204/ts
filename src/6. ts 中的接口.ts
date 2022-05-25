// ts 中的接口
// interface ISum {
//   (a: number, b: number): number;
// }

// 调用接口描述对象类型
interface IObject {
  name: string;
  age: number;
}

const getName = (obj: IObject) => {};

// 描述函数类型

type ISum = (a: number, b: number) => number;

const sum: ISum = (a, b) => {
  return a + b;
};

// 接口中的混合类型
interface ICount {
  (): number;
  count: number;
}

const fn: ICount = (() => {
  return ++fn.count;
}) as ICount;
fn.count = 0;

export interface IEffect {
  (): void;
  id: number;
}

// vue effect 接口
function effect(fn: Function) {
  const _effect = creacteReactiveEffect(fn);

  return _effect;
}

function creacteReactiveEffect(fn: Function): IEffect {
  const effect: IEffect = function reactiveEffect() {};
  effect.id = 0;
  return effect;
}

// 接口的特效
interface IVegetables {
  color: string;
  taste: string;
}

// const tomato:IVegetables = ({
//   color: 'yellow',
//   taste: 'sweet',
//   size: 'big'
// }) as IVegetables

// interface IVegetables {
//   size: "big";
// }
// const tomato: IVegetables = {
//   color: "yellow",
//   taste: "sweet",
//   size: "big",
// };

interface ITomato extends IVegetables {
  size: "big";
}

interface IVegetables {
  color: string;
  taste: string;
  [key: string]: string;
}

const tomato: IVegetables = {
  color: "yellow",
  taste: "sweet",
  size: "big",
};

// 接口可以被类实现
interface ISpeack {
  name: string;
  speack(): void;
}
interface IGoodWord {
  word: string;
  good(): string;
}
class Speack implements ISpeack, IGoodWord {
  word!: string;
  name!: string;
  good(): string {
    throw new Error("Method not implemented.");
  }

  speack(): void {
    throw new Error("Method not implemented.");
  }
}
// 抽象类
abstract class Person {
  abstract name: string;
  eat() {
    console.log("eat");
  }
  abstract dringk(): void;
}

class Child extends Person {
  name = "ol";
  dringk() {
    console.log("eat");
  }
}

//接口描述实例
let instance: Animal;
interface IAnimal<T> {
  new (name: string): T;
}

function createInstance<T>(clazz: IAnimal<T>, name: string) {
  if (instance) return instance;
  return new clazz(name);
}

class Animal {
  constructor(public name: string) {}
}

class Animal2 {
  constructor(public name: string) {}
}

let r = createInstance<Animal>(Animal, "cat");
let r2 = createInstance<Animal2>(Animal2, "cat");
