//구조분해할당
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const Sonata = {
  carColor: 'black',
  speed: 30,
}

const carColor = Sonata.carColor;
console.log(carColor);
const speed = Sonata.speed;
console.log(speed);


{
  const {carColor, speed} = Sonata; //구조분할 
  console.log(carColor, speed);
}

//다른 변수명으로 정의해서 사용가능 
{
  const {carColor:myColor, speed:mySpeed} = Sonata; 
  console.log(myColor, mySpeed);
}

const fruits = ['🌭', '🍟', '🍔'];
const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

{
  const [first, second, third] = fruits;
  console.log(first, second, third);
}