const hap = (a, b, cb) => {
  setTimeout(() =>{
    cb(a+b);
    console.log(`hap ${cb(a+b)}`);
  }, 1000) //1초간의 지연이 발생 
}
//함수 hap 세번째 인자에 들어갈 콜백함수 선언
const first = (x) => {
  console.log(`first x : ${x}`);
  return x + 1;
}

const x = hap(1,2, first);
console.log(`x : ${x}`);
const y = x;
console.log(`y : ${y}`);