//자바스크립트는 절차지향언어이다.(defer강조)

const hap = (a, b) => {
  setTimeout(() =>{
    return a+b;
  }, 1000) //1초간의 지연이 발생 
}

const x = hap(1,2);
const y = x;
console.log(x);
console.log(y);

/* 
  setTimeout(콜백함수 지연되는 시간 milli)
*/