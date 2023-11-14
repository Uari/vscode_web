//자바스크립트에서는 함수는 객체다.

//return 을 쓰지 않으면 undefined 반환됨 - default
add = (a, b) => {
  return a+b;
}

console.log(add);
console.log(add(1,2));

const hap = add;
console.log(hap);

// 결론 : 같은 이름의 함수를 가질수 없다 - 메소드 오버로딩 해당 없음
console.log(hap());

hap1 = () =>{
  return undefined;
}

console.log(hap1);