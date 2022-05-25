// 类的使用
// public  是默认加的，也可以不写
// class Pointer {
//   public x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

class Pointer {
  constructor(public x: number, public y: number) {
    this.x = x; // 实例属性
    this.y = y;
  }
}

let pointer = new Pointer(10, 10);
console.log(pointer.x, pointer.y);

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

class Cat extends Animal {
  constructor(name: string, age: number, address: string) {
    super(name, age);
  }
}

console.log(Cat.type);

export {};
