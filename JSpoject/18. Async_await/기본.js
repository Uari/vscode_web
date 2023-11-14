//Async, Await
//than 함수를 쓰려면 promise이어야한다.\\
/* 
  then은 Promise 프로토타입이 제공하는 함수 
  여기서 프로토타입의 정의 - 어떤 객체에 대해서도 재사용이 가능한 객체
*/

//fetch 함수는 BOM 이라서 REPL실행이 불가하다.

const a = () =>{
  return new Promise(resolve =>{
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  })
}

const b = () =>{
  console.log(2);
}

//a().then(()=>b());

//Await
const wrapping = async () =>{
  await a();
  b();
}

wrapping();

//Cannot read properties of undefined (reading 'then')
//promise 타입만 then 함수를 호출할수있다.
//b().then(()=>a());

