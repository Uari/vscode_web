//3항 연산자

const isCar = true;

let carName;

if(isCar){
  carName = '소나타';
}else{
  carName = '자동차가 아니다'
}

console.log(carName);


let carName2 = isCar ? '소나타' : '자동차가 아니다.';
console.log(carName2);

