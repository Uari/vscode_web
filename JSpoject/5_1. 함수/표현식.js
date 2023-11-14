/* 
  함수 선언문 function name(){}
  함수 표현식 const name = function(){} - 익명함수-외부에서 사용불가 
*/

let hap = function (a,b){
  return a+b;
}
//다른표현
hap = (a,b) => a+b;

console.log(hap(1,2));

//IIFE(Immedicately-invoked Function Expressions)
//즉시 실행 함수
(function run(){
  console.log('run');
})();



let hap2 = (function run(){
  console.log('run');
})();
