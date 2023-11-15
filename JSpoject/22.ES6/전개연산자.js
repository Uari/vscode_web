//전개연산자(Spread syntax) - 주소의 참조값만 복사해 온다.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
let emp = {key:'empno'}
let dept = {key:'deptno'}
let member = {key: 'memno'}

const array = [emp, dept]
console.log(array);

// array copy - 얕은복사? 깊은복사?

const arrayCopy = [...array]; //얕은 복사

arrayCopy.push(member);
console.log(arrayCopy);
console.log(array);

const arrayCopy2 = [...arrayCopy,{key: 'bookno'}]
console.log(arrayCopy2);

const obj1 = {emp, dept}
console.log(obj1);

let emp2 = {key1:'empno'}
let dept2 = {key2:'deptno'}

const obj2 = {...emp2, ...dept2}
console.log(obj2);

