/* 
  Array - 내장함수 -> 얕은 복사, 깊은 복사 
  : 연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조 -> Map
*/

const colors = ["red", "blue", "greem"];
console.log(colors);

colors.forEach((color) => {
  console.log(color);
})
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[0]);

colors.map((color)=>{
  console.log(color);
})

const names = ["나신입", "강감찬", "이성계"];
const copy = [];

for(let i = 0; i < names.length; i++){
  copy.push(names[i]);
  console.log(copy[i]);
}
copy.push("나초보");
//깊은복사 새로운 배열을 추가하는 것 
//얕은복사 주소번지가 같은 것 한쪽을 바꾸면 다른 쪽도 바뀐다.
console.log(copy);
console.log(names);

/* names.forEach((name)=>{
  copy.push(names);
})
console.log(copy); */