//함수는 하나의 데이터이다.
const getNumber = function() {
  return 123;
}

const getNumber2 = () => {
  return 5;
}

console.log(typeof getNumber);
console.log(typeof getNumber());


const a = () => {
  console.log("A");
}

const b = (c) => {
  console.log(c);
  c()
}

b(a)