/* 
  모든 업무에는 순서가 있다.
  입력 -> 처리 -> 출력
  순서대로 
*/
first = (param) => {
  console.log("1");
  param();
}

second = () => {
  console.log("2");
}

first(second);
