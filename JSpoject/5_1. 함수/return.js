//return을 함수 중간에 만나면 함수가 종료됨

function m(num){
  
  if(num < 0){
    return;
  }else{
    console.log(num);
  }
}

m(5);
m(-5);