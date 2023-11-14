// 동기 비동기 
/* 
  콜백함수 - 일급함수
  비동기식
  -setTimeout - 지연한 후 함수를 호출 

*/



console.log(1);
const second = (cb) =>{
  setTimeout(() => {
    console.log(2);
    cb();  
  }, 2000);
}

const first = () =>{
  console.log(3);
}