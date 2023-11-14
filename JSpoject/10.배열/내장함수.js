/* 
  내장함수 -1 
  :UI만 가지고도 단위 테스트를 할 수 있다.

  splice & slice -> 얕은복사인가 아님 깊은복사인가?
*/

const names = ["나신입", "강감찬", "이성계"];

const result = names.toString();
console.log(result);
//join - DOM API (가독성이 좋지 않음) => 문자열 템플릿 -> 최소한 DOM Tree 보임
const result2 = names.join(" ");
console.log(result2);

names.splice(1,0,'나초보');
console.log(names);

const orther = names.slice(1)
console.log(orther);
console.log(names);