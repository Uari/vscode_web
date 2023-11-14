/* 
function func(){} //함수도 호이스팅 이슈가 있다.
const func = (element, index, array) ⇒ {}

*/

const fruits = ['사과', '토마토', '딸기'];

fruits.forEach(element => console.log(element))
fruits.forEach((element, cnt) => console.log(cnt, element))
fruits.forEach((element, cnt, fruits)=>console.log(cnt, element, fruits))
fruits.forEach((element, cnt)=>{
    console.log(cnt, element);
    document.write(cnt, element)
})