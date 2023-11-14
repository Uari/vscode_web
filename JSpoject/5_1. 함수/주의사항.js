
function funcA(num){
  num = 5;
  console.log(num);
}


const value = 3;
funcA(value)

console.log(value);

const fruit = {name:'사과'};

function funcB(obj){
  obj.name = '포도';
  console.log(obj);
}

funcB(fruit)
console.log(fruit);