//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// Expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a, b, c };

console.log(object2);
// Expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// Expected output: "foo"
