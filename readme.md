- [环境安装](#环境安装)
  - [运行](#运行)
  - [构建工具处理 ts](#构建工具处理-ts)
- [typescript](#typescript)
  - [1. 基础类型](#1-基础类型)
    - [1.1 number, string, boolen](#11-number-string-boolen)
    - [1.2 数组](#12-数组)
    - [1.3 元祖](#13-元祖)
    - [1.4 枚举](#14-枚举)
      - [1.4.1 数字枚举](#141-数字枚举)
      - [1.4.2 字符串枚举](#142-字符串枚举)
      - [1.4.3 常量枚举](#143-常量枚举)
      - [1.4.4 异构枚举](#144-异构枚举)
    - [1.5 null， undefined](#15-null-undefined)
    - [1.6 never](#16-never)
    - [1.7 void](#17-void)
  - [2. 联合类型](#2-联合类型)
    - [2.1 使用场景](#21-使用场景)
      - [断言强转 as](#断言强转-as)
      - [非空断言 `x!`](#非空断言-x)
      - [确定赋值断言](#确定赋值断言)
      - [?? || &&](#--)
    - [2.2 字面量类型, 关键字：type](#22-字面量类型-关键字type)
  - [3. 函数的使用](#3-函数的使用)
    - [3.1 普通定义方式](#31-普通定义方式)
    - [3.2 指定类型的定义方式](#32-指定类型的定义方式)
    - [3.3 函数重载](#33-函数重载)
  - [4. 类的基本概念](#4-类的基本概念)
    - [4.1 类的标识符](#41-类的标识符)
    - [4.2 类的内容](#42-类的内容)
  - [5. 类的装饰器](#5-类的装饰器)
  - [6. ts 中的接口](#6-ts-中的接口)
    - [6.1 调用接口描述对象类型](#61-调用接口描述对象类型)
    - [6.2 描述函数类型](#62-描述函数类型)
    - [6.3 接口中的混合类型](#63-接口中的混合类型)
    - [6.4 接口的特效](#64-接口的特效)
    - [6.5 接口可以被类实现(implements)](#65-接口可以被类实现implements)
      - [6.6 抽象类 不能被 new 可以继承](#66-抽象类-不能被-new-可以继承)
      - [6.7 接口描述实例](#67-接口描述实例)
  - [7. ts 中的泛型](#7-ts-中的泛型)
    - [7.1 泛型的约束作用](#71-泛型的约束作用)
      - [7.2 关键字 keyof](#72-关键字-keyof)
      - [7.3](#73)
      - [7.4](#74)
  - [8. ts 中的类型保护](#8-ts-中的类型保护)
    - [in 关键字](#in-关键字)
    - [typeof 关键字](#typeof-关键字)
    - [instanceof 关键字](#instanceof-关键字)
    - [自定义类型保护的类型谓词](#自定义类型保护的类型谓词)
  - [9. ts 中的交集类型](#9-ts-中的交集类型)
  - [10. ts 中的兼容性处理](#10-ts-中的兼容性处理)
  - [11. ts 中的条件类型](#11-ts-中的条件类型)
  - [12. ts 中的内置类型](#12-ts-中的内置类型)
    - [12.1 Partial](#121-partial)
    - [12.2 Required （-？去掉可选）全部必选](#122-required--去掉可选全部必选)
    - [12.3 Readonly](#123-readonly)
    - [12.4 Pick](#124-pick)
    - [12.5 Omit](#125-omit)
    - [12.6 Extract](#126-extract)
    - [12.7 Exclude](#127-exclude)
    - [12.8 Record](#128-record)
  - [13. ts 中的扩展类型](#13-ts-中的扩展类型)
  - [14. ts 中的声明文件](#14-ts-中的声明文件)




[结合文章](https://juejin.cn/post/6872111128135073806#heading-24)
# 环境安装

- npm install typescript -g
- tsc --init（初始化 ts）

## 运行

解析 ts 可以用插件，也可以用 bebal, 比他 rollup 支持的插件有 rollup-plugin-typescript2

- tsc --watch 实时全局编译 tsc
- code-runder + ts-node(全局包)

## 构建工具处理 ts

- webpack,rollup ...

# typescript

## 1. 基础类型

### 1.1 number, string, boolen

> ps: number 和 Number 不一样，number 是基础类型，Number 是 number 类

### 1.2 数组

```ts
const arr1: number[] = [];
const arr2: (number | string)[] = []; // 联合类型
const arr3: Array<boolean> = [true]; // 范型
```

### 1.3 元祖

ts 自己写的，内容固定。 元祖类型的数组，初始化时必须准守约定的固定类型，后续则可以随意添加约定的类型，
但是不可以用索引来更改元祖

```ts
const tuple: [string, boolean, number] = ["a", true, 1];
tuple.pop();
tuple.push("rds");
// tuple[3] = 100; x 不能用索引来更改元祖
```

### 1.4 枚举
#### 1.4.1 数字枚举
```js
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}
```
默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长。换句话说，Direction.SOUTH 的值为 1，Direction.EAST 的值为 2，Direction.WEST 的值为 3。

#### 1.4.2 字符串枚举
```js
enum Direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}
```
通过观察数字枚举和字符串枚举的编译结果，我们可以知道数字枚举除了支持 从成员名称到成员值 的普通映射之外，它还支持 从成员值到成员名称 的反向映射：
```js
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dirName = Direction[0]; // NORTH
let dirVal = Direction["NORTH"]; // 0


```

#### 1.4.3 常量枚举
它是使用 const 关键字修饰的枚举

```js
const enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dir: Direction = Direction.NORTH;
```

#### 1.4.4 异构枚举
异构枚举的成员值是数字和字符串的混合：

```js
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
```
以上代码对于的 ES5 代码如下：
```js
"use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));


```

> 总结：
>```ts
> const enum ROll {
>   // const可加可不加，加上不可以反举，更简洁，一般都是常量枚举
>   USER = "USER",
>   ADMIN = 5,
> }
>```


### 1.5 null， undefined

```ts
let u: undefined = undefined;
let n: null = null;
```

### 1.6 never

出错，死循环，永远走不到的判断

```ts
// 出错
function throwError(): never {
  throw new Error();
}
```

```ts
// 死循环
function whileTrue(): never {
  while (true) {}
}
```

### 1.7 void

表示函数的返回值，也可以描述变量 void 只能赋予 null 和 undefined

```ts
function fn(): void {}
```

## 2. 联合类型

```ts
let numOrString: number | string;
```

### 2.1 使用场景

```ts
let ele: HTMLElement | null = document.querySelector("#app");

ele!.innerHTML = "abc";
```

! 断言， 表示一定存在, 等价于 `ele ? (ele.innerHTML = "aaa") : null;`. ？，表示如果存在

#### 断言强转 as

```ts
let a: string | number | undefined;

(a as number).toFixed(2); // as 语法
a as any as boolean; // 双重断言
```
上面的写法同时也可以用下面的方式代替：

```ts
let a: string | number | undefined;

(<number>a).toFixed(2); // “尖括号” 语法

```

####  非空断言 `x!`

x! 的作用是将从 x 值域中排除 null 和 undefined

```js
function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'. 
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}

type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
  // Object is possibly 'undefined'.(2532)
  // Cannot invoke an object which is possibly 'undefined'.(2722)
  const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
}

```

####  确定赋值断言

在 TypeScript 2.7 版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 TypeScript 该属性会被明确地赋值。为了更好地理解它的作用，我们来看个具体的例子：
```js
let x: number;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
  x = 10;
}
```
很明显该异常信息是说变量 x 在赋值前被使用了，要解决该问题，我们可以使用确定赋值断言：
```js
let x!: number;
initialize();
console.log(2 * x); // Ok

function initialize() {
  x = 10;
}
```
通过 `let x!: number; `确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。

#### ?? || &&

```ts
1 ?? 2; // 1
undefined ?? 2; // 2
null ?? 2; // 2
```

?? 如果前面的值不为 undefined | null 就返回前面的值，否则返回后面的值。
即 排除 undefined 和 null

### 2.2 字面量类型, 关键字：type

类型的内容是固定的，类似枚举。 但是如果类型比较复杂，并且后续可能复用的话，可以提取出来，用`type`字段标识。

```ts
type ITpye = "a" | "b" | "c" | "d";

let type: ITpye = "b";
let type2: ITpye = "c";
```

## 3. 函数的使用

### 3.1 普通定义方式

```ts
function sum(x: string, y: string): string {
  return x + y;
}
```

### 3.2 指定类型的定义方式

```ts
type ISun = (x: number, y: number) => number;
const sum2: ISun = (a, b) => {
  return a + b;
};
```

### 3.3 函数重载

定义不清晰

```ts
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
```

更优解

```ts
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
toArray1(false); // 错误
```

## 4. 类的基本概念

```ts
class Pointer {
  public x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
```

对于上面的例子，public 是默认加的，也可以不写，上面的例子可以改写为：

```ts
class Pointer {
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }
}
```

### 4.1 类的标识符

- `public` 自己和子类，以及子类之外（外界）都可以访问到（全都剋访问到）
- `protected` 只有自己和后代可以访问
- `private` 只有自己可以访问
- `readonly` 只可读 初始化后（constructor 初始化中可以修改），就不可以修改了
- `static` es7 语法 静态属性子类可以直接继承

### 4.2 类的内容

类包含实力属性、方法，静态属性、方法，原型属性和方法。

```ts
class Animal {
  constructor(public name: string, public age: number) {
    this.name = "123"; // 实例属性
  }
  static type = "动物"; // 静态属性
  static getName() {
    // 静态方法
    return this.name;
  }
  say() {
    // 原型的方法
  }

  private str: string = "";
  get content() {
    // 原型的属性
    return this.str;
  }

  set content(newValue: string) {
    // get set是一对的
    this.str = newValue;
  }

  // content = this.str, es7 的语法 ts 不建议用，
  // 会转化为constructor中的实力属性
}
```

## 5. 类的装饰器

类的修饰器 在 ts 中是实验属性，后期可能会修改

```ts
function eat(target: any) {
  target.prototype.eat = function () {
    console.log("eat");
  };
}

function toUpperCase(target: any, key: string) {
  let val: string;
  Object.defineProperty(target, key, {
    get() {
      return val.toUpperCase();
    },
    set(newValue) {
      val = newValue;
    },
  });
}

@eat
class Person {
  eat!: () => void;
  @toUpperCase
  public name: string = "ol";
}
```

## 6. ts 中的接口

interface 和 type 的区别，主要是：

- interface 可以被类继承和实现，type 没有此说法
- type 可以使用联合类型，interface 不可以

### 6.1 调用接口描述对象类型

```ts
interface IObject {
  name: string;
  age: number;
}

const getName = (obj: IObject) => {};
```

### 6.2 描述函数类型

```ts
// 1)  type 类型
type ISum = (a: number, b: number) => number;

// 2）接口

interface ISum {
  (a: number, b: number): number;
}

const sum: ISum = (a, b) => {
  return a + b;
};
```

### 6.3 接口中的混合类型

```ts
interface ICount {
  (): number;
  count: number;
}

const fn: ICount = (() => {
  return ++fn.count;
}) as ICount;
fn.count = 0;
```

此写法在 vue 源码中非常常见，例如 effect 接口

```ts
function effect(fn: Function) {
  const _effect = creacteReactiveEffect(fn);

  return _effect;
}

function creacteReactiveEffect(fn: Function): IEffect {
  const effect: IEffect = function reactiveEffect() {};
  effect.id = 0;
  return effect;
}
```

### 6.4 接口的特效

蔬菜接口包括 color， taste。实例 tomato 除了包含 color， taste 外还包括 size 属性，针对这种情况，我们可以采取以下方式

```ts
interface IVegetables {
  color: string;
  taste: string;
}

// 1） 断言
const tomato: IVegetables = {
  color: "yellow",
  taste: "sweet",
  size: "big",
} as IVegetables;

// 2） 同名接口合并， ⚠️危险 造成原接口污染
interface IVegetables {
  size: "big";
}
const tomato: IVegetables = {
  color: "yellow",
  taste: "sweet",
  size: "big",
};

// 继承
interface ITomato extends IVegetables {
  size: "big";
}

const tomato: ITomato = {
  color: "yellow",
  taste: "sweet",
  size: "big",
};

// ？[key:string]: string
interface IVegetables {
  color: string;
  taste: string;
  size?: string;
}

interface IVegetables {
  color: string;
  taste: string;
  [key: string]: string;
}
```

### 6.5 接口可以被类实现(implements)

可以理解为对类的一部分行为进行抽象

```ts
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
```

#### 6.6 抽象类 不能被 new 可以继承

```ts
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
```

标记为 abstract 在父类中可以只占坑位，不实现内容，留给子类实现

#### 6.7 接口描述实例

类可以充当类型，描述实例，单例模式 如下

```ts
let instance: Animal;
interface IAnimal {
  new (name: string): Animal;
}

function createInstance(clazz: IAnimal, name: string) {
  return new clazz(name);
}

class Animal {
  constructor(public name: string) {}
}
let r = createInstance(Animal, "cat"); // 类可以充当类型，描述实例
```

多例， 泛型

```ts
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
```

## 7. ts 中的泛型

泛型的用处在于丹我们调用的时候 确定类型， 而不是一开始就写好类型，

```ts
function createArray<T>(times: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(value);
  }
  return result;
}

let r = createArray(6, "aaa");
```

### 7.1 泛型的约束作用

```ts
type withLen = { length: number };
const computeLen = (target: withLen): number => {
  return target.length;
};
let len = computeLen("asdf");
let len2 = computeLen([1, 2]);
let len3 = computeLen(true); // X
```

#### 7.2 关键字 keyof

属于对象的属性值都可以

```ts
const getVal = <T extends Object, K extends keyof T>(obj: T, key: K) => {};

getVal({ name: "" }, "name");
// getVal({name: ''}, 'age') // X
```

#### 7.3

```ts

```

#### 7.4

```ts

```

## 8. ts 中的类型保护

### in 关键字

```ts
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}
```
### typeof 关键字

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

```

typeof 类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== typename，"typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。

### instanceof 关键字

```ts
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadder(6);

if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder'
}

```
### 自定义类型保护的类型谓词

```ts

function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

```

```ts

```


## 9. ts 中的交集类型

在 TypeScript 中交叉类型是将多个类型合并为一个类型。通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。

```js
type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };

let point: Point = {
  x: 1,
  y: 1
}


``` 

## 10. ts 中的兼容性处理

## 11. ts 中的条件类型

## 12. ts 中的内置类型

### 12.1 Partial

表示选择项是可选的， 深度递归，默认不是深度递归

```ts
type MyPerson = Partial<IPerson>;
```

### 12.2 Required （-？去掉可选）全部必选

### 12.3 Readonly

### 12.4 Pick

### 12.5 Omit

### 12.6 Extract

### 12.7 Exclude

### 12.8 Record

## 13. ts 中的扩展类型

## 14. ts 中的声明文件
