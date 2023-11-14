//XMLHttpRequest는 브라우저가 제공하는 비동기통신 객체
//생성하게 되면 open(), send() 호출 가능
const ajax = new XMLHttpRequest(); /* 브라우저가 비동기 처리를 위해 제공하는 내장객체 */
const TITLE_URL = "https://api.hnpwa.com/v0/news/1.json";
const container = document.getElementById("root");
const content = document.createElement("div");
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
//open은 XMLHttpRequest 객체가 제공하는 함수로 파라미터는 3개가 필요
//1)전송방식, 2) 요청하는 URL 3)true : 동기, false:비동기 처리
//ajax변수는 XMLHttpRequest를 참조하는 변수명

ajax.open("GET", TITLE_URL, false);
ajax.send(); //send()호출될 때 비로서 서버측에 요청이 일어남

const newsList = JSON.parse(ajax.response); //6번에서 요청했을 때 서버측의 응답을 받아오는 속성이 response
console.log(newsList); //서버측에서 보낸 응답을 출력해 보기 - Array로 변환하여 출력해줌
const ul = document.createElement("ul"); //DOM API 가지고 태그를 만드니까 직관적이지 않다. DOM Tree가 그려지지 않음

//해시값이 변경될 때 - 인터셉트 - @id -> Array 에 담긴 id값으로 변경
addEventListener("hashchange", () => {
  // console.log('해시변경?!??!?');
  console.log(location.hash);//#38019991
  const id = location.hash.substring(1);//파라미터에 1을 주어서 #을 제외시킨다.
  console.log(id);
  ajax.open("GET", CONTENT_URL.replace("@id", id), false);
  ajax.send();

  const ncontent = JSON.parse(ajax.response);
  const title = document.createElement("h1");
  title.innerHTML = ncontent.title;
  //appendChild : 기존에 태그 하위 태그로 추가하는 함수 이다.
  content.appendChild(title); //<div><h1>제목{텍스트노드:태그이름은 없고 값은 있다.}</h1></div>
  console.log(ncontent);
});

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${newsList[i].id}`;
  // console.log(newsList[i].title);
  a.innerHTML = `${newsList[i].title}(click ${newsList[i].comments_count})`;
  li.appendChild(a);//<li><a>
  ul.appendChild(li);//<ul><li>
} //end of for

container.appendChild(ul);//condainer : document.getElementById('root').ul -> <div id = 'root'><ul>
container.appendChild(content);//appendChild는 기존에 있는 노드에 추가하기
