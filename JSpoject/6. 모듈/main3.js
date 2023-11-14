setTimeout(async () => {
  const temp = await import('./module.js')
  console.log(temp);
}, 3000)

/* 
  자바스크립트 기본적으로 동기인데 만일 꼭 비동기 적으로 처리해야할 때 setTimeout 함수를 사용하세요
  async와 await 꼭 같이 

  Front-End: React.js, UI솔루션 - 클라이언트 사이드
  Back-End : Java - 서버사이드(지연발생-출처가 다름(CORS이슈)) - 비동기 처리를 해야함 - 자바는 비동기 가능함
  http://localhost:9000/dept.getDeptList.jsp
*/