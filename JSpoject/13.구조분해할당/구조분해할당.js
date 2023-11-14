//구조분해할당 - React(props) - Next.js(F/W) - FLUX

/* 
fetch(a,b, () =>{

}).then((response) => {JSON.stringify(String - 구조분해할당X) or parse(배열)})
*/

const user = {
  name: '나신입',
  age: 35,
  email: 'nice@hot.com'
}

const user2 = {
  address: '서울시 마포구 공덕동',
  address: '인천시'
}

const {name, age, email, address} = user;

console.log(name, age, email, address);
console.log(user.name);