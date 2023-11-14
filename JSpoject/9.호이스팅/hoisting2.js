/* 
  ES5 때는 호이스팅 이슈 해결방법
  즉시 실행 함수
*/
const btns = document.querySelectorAll("ul li");

for (var i = 0; i < btns.length; i++) {
  ((index) =>{
    btns[index].addEventListener("click", (e) => {
      console.log(e.target);
      console.log(index);
    })}
    )(i);
}
