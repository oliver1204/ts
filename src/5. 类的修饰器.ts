// 类的修饰器 在ts中是实验属性，后期可能会修改
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
