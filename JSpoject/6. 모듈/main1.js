import number, {str,fruits, Sonata} from "./module.js"

console.log(number);
console.log(str);
console.log(fruits);
console.log(fruits.length);

const myCar = new Sonata();
console.log(myCar.speed);
myCar.speedUP()//함수 이름 뒤에 괄호가 있어야 호출이다
console.log(myCar.carColor);
//자바에서는 전변을 반드시 선언하고 this.머시기 사용해야 하는데
//자스에서는 생략이 가능함 - 선언없이 this가 붙으면 전변임
console.log(myCar.wheelNum);