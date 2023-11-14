//파라미터, 매개변수, 인자

function hap(a,b){
  console.log(arguments);
  console.log(arguments[2]);
  return a+b+arguments[2];
}

hap2 = (a,b) =>{

}
console.log(hap(1,2,3));

hap(1,2,null)


function hap3(a="아젠장 이게 왜 가능해", b=3){
  return a+b;
}
console.log(hap3());


//Rest Parameter
function sum(... numbers){
  console.log(numbers);
}
sum(1,3,5,7,9)

function sum2(x, y, ...numbers){
  console.log(x);
  console.log(y);
  console.log(numbers);
  console.log(numbers[1]);

  return numbers
}

console.log(sum2(1,3,5,7,9));

//