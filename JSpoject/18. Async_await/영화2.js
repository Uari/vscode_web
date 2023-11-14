//OMDB - API 활용 실습

const movieList = (movieTitle) => {
  return new Promise(resolve => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9a8734a5&s=${movieTitle}`)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    resolve();
  })
  })
}

//주의사항
//async 와 await 한 쌍이다.
//async 붙이는 자리는 콜백함수 자리
//Promise 사용한 구문을 async와 await 으로 변경하기 위해서는 
//await을 감싸는 함수를 선언할 것.

const wrapping = async() =>{
  await movieList('avatar');
  console.log('아바타');
  
  await movieList('avengers');
  console.log('어벤져스');
  
  await movieList('frozen');
  console.log('겨울왕국');
}

wrapping();

//테스트 할 때 주의사항 - fetch 함수는 BOM API이라서 REPL 로는 확인 불가 
//html문서를 통해서 실행