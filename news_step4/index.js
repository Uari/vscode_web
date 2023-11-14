const ajax = new XMLHttpRequest(); /* 브라우저가 비동기 처리를 위해 제공하는 내장객체 */
const TITLE_URL = "https://api.hnpwa.com/v0/news/1.json";
const container = document.getElementById("root");
const content = document.createElement("div");
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

getData = (url) => {
  ajax.open("GET", url, false);
  ajax.send(); //서버측에 요청을 보내고 응답을 기다리는 중..
  return JSON.parse(ajax.response);
};

const newsList = getData(TITLE_URL); //6번에서 요청했을 때 서버측의 응답을 받아오는 속성이 response
const ul = document.createElement("ul"); //DOM API 가지고 태그를 만드니까 직관적이지 않다. DOM Tree가 그려지지 않음

addEventListener("hashchange", () => {
  const id = location.hash.substring(1); //파라미터에 1을 주어서 #을 제외시킨다.

  const ncontent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("h1");
  title.innerHTML = ncontent.title;
  content.appendChild(title); //<div><h1>제목{텍스트노드:태그이름은 없고 값은 있다.}</h1></div>
});

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${newsList[i].id}`;
  a.innerHTML = `${newsList[i].title} ( click ${newsList[i].comments_count} )`;
  li.appendChild(a); //<li><a>
  ul.appendChild(li); //<ul><li>
} //end of for

container.appendChild(ul); //condainer : document.getElementById('root').ul -> <div id = 'root'><ul>
container.appendChild(content); //appendChild는 기존에 있는 노드에 추가하기
c