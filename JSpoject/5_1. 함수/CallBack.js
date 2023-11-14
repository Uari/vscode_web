/* 
  콜백함수 - 실습
  함수도 객체가 될 수 있다.
*/

const hap = (a, b) => a + b;
const minus = (a, b) => a - b;

//파라미터 자리는 외부에 결정
// 3번째는 함수 - 외부로 주어지는 함수를 콜백 함수
function account(a, b, action){
  if(a<0 || b<0){
    return;
  }
  let result = action(a,b);
  return result;
}
//전달된 action은 콜백함수 - 언제 호출될지 모르는 경우도 콜백함수
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는게 아니라 
//함수를 가리키고 있는 함수의 참조값이 전달된다.

console.log(account(1, 2, minus));
console.log(account(1, 2, hap));