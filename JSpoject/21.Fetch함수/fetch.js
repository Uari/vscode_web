var myHeaders = new Headers();
myHeaders.append("Authorization", "KakaoAK 818b11bd2a07b66b6f5537b683402953");
//사용자가 입력한 정보를 담는 객체 
//var formdata = new FormData();
//body 속성을 통해서 서버층에 값을 넘겨줘야 원하는 정보를 받아 올 수 있다. 
//body 속성을 사용해서 값을 전달할 때 는 GET방식불가 -> POST 방식으로 해야함
//body 속성에 넘기는 정보는 반드시 문자열로 한다.

var requestOptions = {
  method: 'POST', //GET 방식으로 서버측에 값을 넘길때 쿼리스트링을 사용할 수 있지만 body속성을 이용해서 값을 넘길 땐 반드시 POST방식이어야한다.
  headers: myHeaders,
  body: JSON.stringify({
    name: '나신입',
    email: 'nice@hot.com'
  }),
  redirect: 'follow'
};

fetch("https://dapi.kakao.com/v3/search/book?target=title&query=자바&size=3", requestOptions)
  .then(response => response.text())  //json() then 반환하는 Promise
  .then(result => console.log(result)) //Promise 제공하는 함수나 속성을 호출할 수 있다.
  .catch(error => console.log('error', error));